<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\User;
use Auth;
use DB;

class PassportController extends Controller
{
    public $successStatus = 200;

    public function register(Request $request) {
     
        $newUser = new User;

        /* Criação dos atributos de usuário */
        $newUser->first_name = $request->first_name;
        $newUser->last_name = $request->last_name;
        $newUser->email = $request->email;
        $newUser->password = bcrypt($request->password);
        $newUser->description = $request->description;
        $newUser->photo = $request->photo;

        /* Usuário também é guia? */
        if ($request->is_guide) {
            $newUser->is_guide = $request->is_guide;
            $newUser->cpf = $request->cpf;
            $newUser->phone_number = $request->phone_number;
            $newUser->cadastur = $request->cadastur;
        }

        $newUser->save();
        $success['token'] = $newUser->createToken('MyApp')->accessToken;
        $success['name'] = $newUser->name;
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    public function login() {
        if(Auth::attempt(['email'=>request('email'),'password'=>request('password')])) {
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')->accessToken;
            return response()->json(['success'=>$success],$this->successStatus);
        } else {
            return response()->json(['error'=>'Unauthorized'],401);
        }
    }
    
    public function getDetails() {
        $user = Auth::user();
        return response()->json(['success' => $user], $this->successStatus);
    }
    
    public function logout() {
        $accessToken = Auth::user()->token();
        DB::table('oauth_refresh_tokens')->where('access_token_id',$accessToken->id)->update(['revoked'=>true]);
        $accessToken->revoke();
        return response()->json(null, 204);
    }

}

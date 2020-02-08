<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\User;

class UserController extends Controller
{

    public function createUser(Request $request) {

        $validatorUser = Validator::make($request->all(), [

        /*Validações de usuário*/
        'first_name' => 'required|alpha',
        'last_name' => 'required|alpha',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|string',
        'description' => 'string',
        'is_guide' => 'boolean',
        'is_admin' => 'boolean'

        ]);
    
        if($validatorUser->fails()) {
            return response()->json($validatorUser->errors());
        }

        /*Validações de guia*/
        if($request->is_guide) {
            $validatorGuide = Validator::make($request->all(), [
            'cpf' => 'required|cpf',
            'phone_number' => 'required|telefone',
            'cadastur' => 'required|string'
            ]);

            if($validatorGuide->fails()) {
                return response()->json($validatorGuide->errors());
            }
        }

        $user = new User;
        $user->createUser($request);
        return response()->json([$user]);
    }

    public function listUser() {
        $user = User::all();
        return response()->json($user);
    }

    public function showUser($id) {
        $user = User::findOrFail($id);
        return response()->json([$user]);
    }

    public function updateUser(Request $request, $id) {

        $user = User::find($id);

        if($user) {

            $validatorUser = Validator::make($request->all(), [

            /*Validações de usuário*/
            'first_name' => 'alpha',
            'last_name' => 'alpha',
            'email' => 'email|unique:users,email,',
            'password' => 'string',
            'description' => 'string',
            'is_guide' => 'boolean',
            'is_admin' => 'boolean'

            ]);
                
            if($validatorUser->fails()) {
                return response()->json($validatorUser->errors());
            }
            
            /*Validações de guia*/
            if($user->is_guide) {
                $validatorGuide = Validator::make($request->all(), [

                'cpf' => 'cpf',
                'phone_number' => 'telefone',
                'cadastur' => 'string'
                
                ]);

                if($validatorGuide->fails()) {
                    return response()->json($validatorGuide->errors());
                }
            }

            $user->updateUser($request);
            return response()->json([$user]);

        } else {
            return response()->json(['Este usuário não existe!']);
        }
    }

    public function deleteUser($id) {
        User::destroy($id);
        return response()->json(['Usuário deletado!']);
    }
}

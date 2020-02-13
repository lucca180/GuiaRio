<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use App\User;

class UserController extends Controller
{

    public function createUser(Request $request) {

        $user = new User;

        $validatorUser = Validator::make($request->all(), [

        /*Validações de usuário*/
        'first_name' => 'required|alpha',
        'last_name' => 'required|alpha',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|string',
        'description' => 'string',
        'photo' => 'file|image|mimes:jpeg,png,gif,webp|max:2048',
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
            'phone_number' => 'required|celular_com_ddd',
            'cadastur' => 'required|string'

            ]);

            if($validatorGuide->fails()) {
                return response()->json($validatorGuide->errors());
            }
        }

        $user->createUser($request);

        if($request->photo) {
            /* Código do Storage */
            if (!Storage::exists('localUserPhotos/')) {    
                Storage::makeDirectory('localUserPhotos/',0775,true);
            }
                        
            $file = $request->file('photo');
            $filename = $user->id. '.' .$file->getClientOriginalExtension();
            $path = $file->storeAs('localUserPhotos',$filename);
            $user->photo = $path; 
        }

        $user->save();

        return response()->json($user);
    }

    public function createRating(Request $request, $id) {
        $user = User::findOrFail($id);
        $user->ratings()->attach($request->place_id, [
            'comment' => $request->comment, 
            'rating' => $request->rating, 
            'ratingDate' => Carbon::now(),
        ]);
    }

    public function createFavorite(Request $request, $id) {
        $user = User::findOrFail($id);
        $user->favorites()->attach($request->place_id);
    }

    public function deleteFavorite(Request $request, $id) {
        $user = User::findOrFail($id);
        $user->favorites()->detach($request->place_id);
    }

    public function listUser() {
        $user = User::all();
        return response()->json($user);
    }

    public function showUser($id) {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    public function showUserPhoto($id) {
        $user = User::findOrFail($id);
        return Storage::download($user->photo);
    }

    public function ratingsUser($id) {
        $user = User::find($id);
        if($user) {
            return response()->json($user->ratings);
        } else {
            return response()->json(['Este usuário não existe']);
        }
    }

    public function favorites($id) {
        $user = User::find($id);
        if($user) {
            return response()->json($user->favorites);
        } else {
            return response()->json(['Este usuário não existe']);
        }
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
            'photo' => 'file|image|mimes:jpeg,png,gif,webp|max:2048',
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
                'phone_number' => 'celular_com_ddd',
                'cadastur' => 'string'
                
                ]);

                if($validatorGuide->fails()) {
                    return response()->json($validatorGuide->errors());
                }
            }

            $user->updateUser($request);

            if($request->photo) {
                /* Código do Storage */
                if (!Storage::exists('localUserPhotos/')) {
                    Storage::makeDirectory('localUserPhotos/',0775,true);
                }
                $file = $request->file('photo');
                $filename = $user->id. '.' .$file->getClientOriginalExtension();
                $path = $file->storeAs('localUserPhotos',$filename);
                $user->photo = $path; 
            } 
           
            $user->save();

            return response()->json([$user]);

        } else {
            return response()->json(['Este usuário não existe!']);
        }
    }

    public function deleteUser($id) {
        
        $user = User::findOrFail($id);
        Storage::delete($user->photo);
        
        User::destroy($id);
        return response()->json(['Usuário deletado!']);
    }


}

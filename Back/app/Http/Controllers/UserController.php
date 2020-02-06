<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function createUser(Request $request) {
        $user = new User;
        $user->createUser($request);
        return response()->json([$user]);
    }

    public function showUser($id) {
        $user = User::findOrFail($id);
        return response()->json([$user]);
    }

    public function updateUser(Request $request, $id) {
        $user = User::find($id);
        if($user) {
            $user->updateUser($request);
            return response()->json([$user]);
        } else {
            return response()->json(['Este usuário não existe!']);
        }
    }

    public function deleteUser($id) {
        User::destroy($id);
        return response()->json([$user]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Place;

class PlaceController extends Controller
{
    public function createPlace(Request $request) {

        $place = new Place;

        $validatorPlace = Validator::make($request->all(), [

        /*Validações de lugar*/
        'name' => 'required|string',
        'description' => 'string',
        'address' => 'required|string',
        'category' => 'integer',
        'site' => 'url',
        'photo' => 'file|image|mimes:jpeg,png,gif,webp|max:2048'
        ]);
        
        if($validatorPlace->fails()) {
            return response()->json($validatorPlace->errors());
        }

        $place->createPlace($request);

        if($request->photo) {
            $file = $request->file('photo');
            $filename = 'place_'. $user->id. '.' .$file->getClientOriginalExtension();
            $path = $file->storeAs('public',$filename);
            $user->photo = 'http://localhost:8000/storage/'.$filename;
        } 

        $place->save();

        return response()->json([$place]);
    }

    public function listPlace() {
        $place = Place::all();
        return response()->json($place);
    }

    public function showPlace($id) {
        $place = Place::findOrFail($id);
        return response()->json([$place]);
    }

    public function showPlacePhoto($id) {
        $place = Place::findOrFail($id);
        return Storage::download($place->photo);
    }

    public function ratingsPlace($id) {
        $place = Place::find($id);
        if($place) {
            return response()->json($place->ratings);
        } else {
            return response()->json(['Este lugar não existe']);
        }
    }

    public function updatePlace(Request $request, $id) {

        $place = Place::find($id);

        if($place) {

            $validatorPlace = Validator::make($request->all(), [

            /*Validações de lugar*/
            'name' => 'string',
            'description' => 'string',
            'address' => 'string',
            'category' => 'integer',
            'site' => 'url',
            'photo' => 'file|image|mimes:jpeg,png,gif,webp|max:2048'
            
            ]);
                
            if($validatorPlace->fails()) {
                return response()->json($validatorPlace->errors());
            }

            $place->updatePlace($request, $id);

            if($request->photo) {
                $file = $request->file('photo');
                $filename = 'place_'. $user->id. '.' .$file->getClientOriginalExtension();
                $path = $file->storeAs('public',$filename);
                $user->photo = 'http://localhost:8000/storage/'.$filename;
            }

            $place->save();

            return response()->json([$place]);

        } else {
            return response()->json(['Este lugar não existe!']);
        }
    }

    public function deletePlace($id) {
        $place = Place::findOrFail($id);
        Storage::delete($place->photo);

        Place::destroy($id);
        return response()->json(['Lugar deletado!']);
    }

}

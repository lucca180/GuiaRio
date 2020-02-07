<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    public function createPlace($request) {

        $this->name = $request->name;
        $this->description = $request->description;
        $this->address = $request->address;
        $this->category = $request->category;
        $this->rating = $request->rating;
        $this->site = $request->site;
        $this->photo = $request->photo;

        $this->save();
    }

    public function updatePlace($request, $id) {

        if($request->name) {
            $this->name = $request->name;
        }
        if($request->description) {
            $this->description = $request->description;
        }
        if($request->address) {
            $this->address = $request->address;
        }
        if($request->category) {
            $this->category = $request->category;
        }
        if($request->rating) {
            $this->rating = $request->rating;
        }
        if($request->site) {
            $this->site = $request->site;
        }
        if($request->photo) {
            $this->photo = $request->photo;
        }

        $this->save();
    }
    
}

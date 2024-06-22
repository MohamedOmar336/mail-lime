<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRolesIndexRequest;
use App\Models\UserRole;

class UserRoleController extends Controller
{
    public function index(UserRolesIndexRequest $request)
    {
        return UserRole::all();
    }
}

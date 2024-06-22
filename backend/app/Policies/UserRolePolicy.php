<?php

namespace App\Policies;

use App\Models\User;

class UserRolePolicy
{
    public function viewAny(User $user)
    {
        return $user->userRole->title === 'admin';
    }
}

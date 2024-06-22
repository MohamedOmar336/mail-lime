<?php

namespace App\Policies;

use App\Models\User;

class CompanyPolicy
{
    public function viewAnyUser(User $user)
    {
        return $user->userRole->title === 'admin';
    }

    public function update(User $user)
    {
        return $user->userRole->title === 'admin';
    }

    public function delete(User $user)
    {
        return $user->userRole->title === 'admin';
    }
}

<?php

namespace App\Policies;

use App\Models\Campaign;
use App\Models\Contact;
use App\Models\User;

class UserPolicy
{
    public function create(User $user)
    {
        return $user->userRole->title === 'admin';
    }

    public function view(User $user, User $otherUser)
    {
        return $user->userRole->title === 'admin' &&
               $user->company_id === $otherUser->company_id;
    }

    public function update(User $user, User $otherUser)
    {
        return $user->userRole->title === 'admin' &&
               $user->company_id === $otherUser->company_id;
    }

    public function delete(User $user, User $otherUser)
    {
        return $user->userRole->title === 'admin' &&
               $user->company_id === $otherUser->company_id;
    }

    public function batchDeleteUsers(User $user)
    {
        return $user->userRole->title === 'admin';
    }

    public function createContact(User $user)
    {
        $allowedRoles = ['admin', 'campaign manager', 'campaign editor'];

        return in_array($user->userRole->title, $allowedRoles);
    }

    public function updateContact(User $user, Contact $contact)
    {
        $allowedRoles = ['admin', 'campaign manager', 'campaign editor'];

        return in_array($user->userRole->title, $allowedRoles) &&
               $contact->company_id === $user->company_id;
    }

    public function deleteContact(User $user, Contact $contact)
    {
        $allowedRoles = ['admin', 'campaign manager', 'campaign editor'];

        return in_array($user->userRole->title, $allowedRoles) &&
               $contact->company_id === $user->company_id;
    }

    public function batchStoreContacts(User $user)
    {
        $allowedRoles = ['admin', 'campaign manager', 'campaign editor'];

        return in_array($user->userRole->title, $allowedRoles);
    }

    public function batchDeleteContacts(User $user)
    {
        $allowedRoles = ['admin', 'campaign manager', 'campaign editor'];

        return in_array($user->userRole->title, $allowedRoles);
    }

    public function createCampaign(User $user)
    {
        $allowedRoles = ['admin', 'campaign manager'];

        return in_array($user->userRole->title, $allowedRoles);
    }

    public function updateCampaign(User $user, Campaign $campaign)
    {
        $allowedRoles = ['admin', 'campaign manager'];

        return in_array($user->userRole->title, $allowedRoles) &&
               $campaign->company_id === $user->company_id;
    }

    public function deleteCampaign(User $user, Campaign $campaign)
    {
        $allowedRoles = ['admin', 'campaign manager'];

        return in_array($user->userRole->title, $allowedRoles) &&
               $campaign->company_id === $user->company_id;
    }

    public function batchDeleteCampaigns(User $user)
    {
        $allowedRoles = ['admin', 'campaign manager'];

        return in_array($user->userRole->title, $allowedRoles);
    }
}

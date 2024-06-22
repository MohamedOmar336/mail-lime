<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class UserAddedByAdmin extends Mailable
{
    use Queueable;
    use SerializesModels;

    public function __construct(
        protected $adminFullName,
        protected $adminCompanyName,
        protected $userEmail,
        protected $userPassword,
    ) {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: $this->adminFullName . ' added you to ' . $this->adminCompanyName . ' company on Mailime',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'email.new_user',
            with: [
                'companyName' => $this->adminCompanyName,
                'userEmail' => $this->userEmail,
                'password' => $this->userPassword,
            ],
        );
    }
}

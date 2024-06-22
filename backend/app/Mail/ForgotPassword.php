<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ForgotPassword extends Mailable
{
    use Queueable;
    use SerializesModels;

    public function __construct(
        protected $token,
    ) {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Mailime Password Reset',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'email.forgot_password',
            with: [
                'token' => $this->token,
            ],
        );
    }
}

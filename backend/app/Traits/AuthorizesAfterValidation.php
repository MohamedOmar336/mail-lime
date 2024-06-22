<?php

namespace App\Traits;

trait AuthorizesAfterValidation
{
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            if (!$validator->failed() && !$this->authorizeValidated()) {
                $this->failedAuthorization();
            }
        });
    }

    abstract public function authorizeValidated();
}

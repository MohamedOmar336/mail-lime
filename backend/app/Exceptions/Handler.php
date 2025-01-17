<?php

namespace App\Exceptions;

use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->renderable(function (NotFoundHttpException $e) {
            return response()->json([
                'message' => 'not fonud'
            ], 404);
        });

        $this->renderable(function (UniqueConstraintViolationException $e) {
            return response()->json([
                'message' => 'db conflict',
            ], 409);
        });

        $this->renderable(function (AccessDeniedHttpException $e) {
            return response()->json([
                'message' => 'unauthorized',
            ], 403);
        });

        $this->renderable(function (ValidationException $e) {
            return response()->json($e->errors(), 400);
        });
    }
}

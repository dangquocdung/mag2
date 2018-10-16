<?php

namespace Botble\Setting\Http\Requests;

use Botble\Support\Http\Requests\Request;

class SendTestEmailRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     * @author Dung Thinh
     */
    public function rules()
    {
        return [
            'email' => 'required|email',
        ];
    }
}

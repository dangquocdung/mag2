<?php

namespace Botble\Backup\Http\Requests;

use Botble\Support\Http\Requests\Request;

class BackupRequest extends Request
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
            'name' => 'required',
        ];
    }
}

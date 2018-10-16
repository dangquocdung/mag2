<?php

namespace Botble\Menu\Http\Requests;

use Botble\Support\Http\Requests\Request;

class MenuRequest extends Request
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
            'name' => 'required|min:3|max:120',
        ];
    }
}

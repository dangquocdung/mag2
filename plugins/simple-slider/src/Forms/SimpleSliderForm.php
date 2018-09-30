<?php

namespace Botble\SimpleSlider\Forms;

use Botble\Base\Forms\FormAbstract;
use Botble\SimpleSlider\Http\Requests\SimpleSliderRequest;
use Botble\SimpleSlider\Tables\SimpleSliderItemTable;
use TableBuilder;

class SimpleSliderForm extends FormAbstract
{

    /**
     * @return mixed|void
     * @throws \Throwable
     */
    public function buildForm()
    {
        $this
            ->setModuleName(SIMPLE_SLIDER_MODULE_SCREEN_NAME)
            ->setValidatorClass(SimpleSliderRequest::class)
            ->withCustomFields()
            ->add('name', 'text', [
                'label' => trans('core.base::forms.name'),
                'label_attr' => ['class' => 'control-label required'],
                'attr' => [
                    'data-counter' => 120,
                ],
            ])
            ->add('key', 'text', [
                'label' => __('Key'),
                'label_attr' => ['class' => 'control-label required'],
                'attr' => [
                    'data-counter' => 120,
                ],
            ])
            ->add('description', 'textarea', [
                'label' => trans('core.base::forms.description'),
                'label_attr' => ['class' => 'control-label'],
                'attr' => [
                    'rows' => 4,
                    'placeholder' => trans('core.base::forms.description_placeholder'),
                    'data-counter' => 400,
                ],
            ])
            ->add('status', 'customSelect', [
                'label' => trans('core.base::tables.status'),
                'label_attr' => ['class' => 'control-label required'],
                'choices' => [
                    1 => trans('core.base::system.activated'),
                    0 => trans('core.base::system.deactivated'),
                ],
            ])
            ->addMetaBoxes([
                'slider-items' => [
                    'title' => __('Slide Items'),
                    'content' => TableBuilder::create(SimpleSliderItemTable::class)
                        ->setAjaxUrl(route('simple-slider-item.list', $this->getModel() ? $this->getModel()->id : 0))
                        ->renderTable(),
                ],
            ])
            ->setBreakFieldPoint('status');
    }
}
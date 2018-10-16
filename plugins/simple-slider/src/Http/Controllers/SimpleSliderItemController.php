<?php

namespace Botble\SimpleSlider\Http\Controllers;

use Botble\Base\Events\CreatedContentEvent;
use Botble\Base\Events\DeletedContentEvent;
use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Forms\FormBuilder;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\SimpleSlider\Forms\SimpleSliderItemForm;
use Botble\SimpleSlider\Http\Requests\SimpleSliderItemRequest;
use Botble\SimpleSlider\Repositories\Interfaces\SimpleSliderItemInterface;
use Botble\Base\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Exception;
use Botble\SimpleSlider\Tables\SimpleSliderItemTable;

class SimpleSliderItemController extends BaseController
{
    /**
     * @var SimpleSliderItemInterface
     */
    protected $simpleSliderItemRepository;

    /**
     * SimpleSliderItemController constructor.
     * @param SimpleSliderItemInterface $simpleSliderItemRepository
     * @author Dung Thinh
     */
    public function __construct(SimpleSliderItemInterface $simpleSliderItemRepository)
    {
        $this->simpleSliderItemRepository = $simpleSliderItemRepository;
    }

    /**
     * Display all simple-slider
     * @param SimpleSliderItemTable $dataTable
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @author Dung Thinh
     * @throws \Throwable
     */
    public function getList(SimpleSliderItemTable $dataTable)
    {
        return $dataTable->renderTable();
    }

    /**
     * Show create form
     * @param FormBuilder $formBuilder
     * @return string
     * @author Dung Thinh
     */
    public function getCreate(FormBuilder $formBuilder)
    {
        return $formBuilder->create(SimpleSliderItemForm::class)
            ->setTitle(__('Create new slide'))
            ->setUseInlineJs(true)
            ->renderForm();
    }

    /**
     * Insert new SimpleSliderItem into database
     *
     * @param SimpleSliderItemRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     * @author Dung Thinh
     */
    public function postCreate(SimpleSliderItemRequest $request, BaseHttpResponse $response)
    {
        $simple_slider = $this->simpleSliderItemRepository->createOrUpdate($request->input());

        event(new CreatedContentEvent(SIMPLE_SLIDER_ITEM_MODULE_SCREEN_NAME, $request, $simple_slider));

        return $response->setMessage(trans('core.base::notices.create_success_message'));
    }

    /**
     * Show edit form
     *
     * @param $id
     * @param FormBuilder $formBuilder
     * @return string
     * @author Dung Thinh
     */
    public function getEdit($id, FormBuilder $formBuilder)
    {
        $simple_slider = $this->simpleSliderItemRepository->findById($id);
        return $formBuilder->create(SimpleSliderItemForm::class)
            ->setTitle(__('Edit slide #:id', ['id' => $simple_slider->id]))
            ->setUseInlineJs(true)
            ->setModel($simple_slider)
            ->renderForm();
    }

    /**
     * @param $id
     * @param SimpleSliderItemRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     * @author Dung Thinh
     */
    public function postEdit($id, SimpleSliderItemRequest $request, BaseHttpResponse $response)
    {
        $simple_slider = $this->simpleSliderItemRepository->findById($id);
        $simple_slider->fill($request->input());

        $this->simpleSliderItemRepository->createOrUpdate($simple_slider);

        event(new UpdatedContentEvent(SIMPLE_SLIDER_ITEM_MODULE_SCREEN_NAME, $request, $simple_slider));

        return $response->setMessage(trans('core.base::notices.update_success_message'));
    }

    /**
     * @return string
     * @throws \Throwable
     * @author Dung Thinh
     */
    public function getDelete($id)
    {
        $slider = $this->simpleSliderItemRepository->findById($id);
        return view('plugins.simple-slider::partials.delete', compact('slider'))->render();
    }

    /**
     * @param Request $request
     * @param $id
     * @param BaseHttpResponse $response
     * @return array|BaseHttpResponse
     * @author Dung Thinh
     */
    public function postDelete(Request $request, $id, BaseHttpResponse $response)
    {
        try {
            $simple_slider = $this->simpleSliderItemRepository->findById($id);
            $this->simpleSliderItemRepository->delete($simple_slider);

            event(new DeletedContentEvent(SIMPLE_SLIDER_ITEM_MODULE_SCREEN_NAME, $request, $simple_slider));

            return $response->setMessage(trans('core.base::notices.delete_success_message'));
        } catch (Exception $exception) {
            return $response
                ->setError()
                ->setMessage(trans('core.base::notices.cannot_delete'));
        }
    }
}

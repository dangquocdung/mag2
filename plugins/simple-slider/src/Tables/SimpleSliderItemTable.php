<?php

namespace Botble\SimpleSlider\Tables;

use Botble\SimpleSlider\Repositories\Interfaces\SimpleSliderItemInterface;
use Botble\Table\Abstracts\TableAbstract;
use Illuminate\Contracts\Routing\UrlGenerator;
use Yajra\DataTables\DataTables;

class SimpleSliderItemTable extends TableAbstract
{
    /**
     * @var string
     */
    protected $type = self::TABLE_TYPE_SIMPLE;

    /**
     * @var string
     */
    protected $view = 'plugins.simple-slider::items';

    /**
     * @var SimpleSliderItemInterface
     */
    protected $repository;

    /**
     * SimpleSliderItemTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param SimpleSliderItemInterface $simpleSliderItemRepository
     */
    public function __construct(
        DataTables $table,
        UrlGenerator $urlGenerator,
        SimpleSliderItemInterface $simpleSliderItemRepository
    )
    {
        $this->repository = $simpleSliderItemRepository;
        $this->setOption('id', 'simple-slider-items-table');
        parent::__construct($table, $urlGenerator);
        $this->has_operations = true;
    }

    /**
     * Display ajax response.
     *
     * @return \Illuminate\Http\JsonResponse
     * @author Sang Nguyen
     * @since 2.1
     */
    public function ajax()
    {
        $data = $this->table
            ->eloquent($this->query())
            ->editColumn('image', function ($item) {
                return view('plugins.simple-slider::partials.thumbnail', compact('item'))->render();
            })
            ->editColumn('title', function ($item) {
                return anchor_link('#', $item->title, [
                    'data-fancybox' => true,
                    'data-type' => 'ajax',
                    'data-src' => route('simple-slider-item.edit', $item->id),
                ]);
            })
            ->editColumn('checkbox', function ($item) {
                return table_checkbox($item->id);
            })
            ->editColumn('created_at', function ($item) {
                return date_from_database($item->created_at, config('core.base.general.date_format.date'));
            });

        return apply_filters(BASE_FILTER_GET_LIST_DATA, $data, SIMPLE_SLIDER_ITEM_MODULE_SCREEN_NAME)
            ->addColumn('operations', function ($item) {
                return view('plugins.simple-slider::partials.actions', compact('item'))->render();
            })
            ->escapeColumns([])
            ->make(true);
    }

    /**
     * Get the query object to be processed by table.
     *
     * @return \Illuminate\Database\Query\Builder|\Illuminate\Database\Eloquent\Builder
     * @author Sang Nguyen
     * @since 2.1
     */
    public function query()
    {
        $model = $this->repository->getModel();
        $query = $model
            ->select([
                'simple_slider_items.id',
                'simple_slider_items.title',
                'simple_slider_items.image',
                'simple_slider_items.order',
                'simple_slider_items.created_at',
            ])
            ->where('simple_slider_id', request()->route()->parameter('id'));
        return $this->applyScopes(apply_filters(BASE_FILTER_TABLE_QUERY, $query, $model, SIMPLE_SLIDER_ITEM_MODULE_SCREEN_NAME));
    }

    /**
     * @return array
     * @author Sang Nguyen
     * @since 2.1
     */
    public function columns()
    {
        $operation = $this->getOperationsHeading();
        $operation['operations']['width'] = '170px;';

        return [
                'id' => [
                    'title' => trans('core.base::tables.id'),
                    'width' => '20px',
                ],
                'image' => [
                    'title' => trans('core.base::tables.image'),
                    'class' => 'text-center',
                ],
                'title' => [
                    'title' => trans('core.base::tables.title'),
                    'class' => 'text-left',
                ],
                'order' => [
                    'title' => trans('core.base::tables.order'),
                    'class' => 'text-left order-column',
                ],
                'created_at' => [
                    'title' => trans('core.base::tables.created_at'),
                    'width' => '100px',
                ],
            ] + $operation;
    }

    /**
     * @return mixed
     * @author Sang Nguyen
     * @since 2.1
     */
    public function buttons()
    {
        return [];
    }

    /**
     * @return mixed
     * @author Sang Nguyen
     * @since 2.1
     */
    public function actions()
    {
        return [];
    }
}

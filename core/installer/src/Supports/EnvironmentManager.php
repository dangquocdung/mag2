<?php

namespace Botble\Installer\Helpers;

use Exception;
use Illuminate\Encryption\Encrypter;
use Illuminate\Http\Request;

class EnvironmentManager
{
    /**
     * @var string
     */
    protected $envPath;

    /**
     * @var string
     */
    protected $envExamplePath;

    /**
     * Set the .env and .env.example paths.
     */
    public function __construct()
    {
        $this->envPath = base_path('.env');
        $this->envExamplePath = base_path('.env.example');
    }

    /**
     * Get the the .env file path.
     *
     * @return string
     */
    public function getEnvPath()
    {
        return $this->envPath;
    }

    /**
     * Get the the .env.example file path.
     *
     * @return string
     */
    public function getEnvExamplePath()
    {
        return $this->envExamplePath;
    }

    /**
     * Save the form content to the .env file.
     *
     * @param Request $request
     * @return string
     */
    public function save(Request $request)
    {
        $results = trans('core.installer::installer.environment.success');

        $key = 'base64:' . base64_encode(Encrypter::generateKey(config('app.cipher')));

        $content = file_get_contents($this->envExamplePath);

        $replacements = [
            'APP_NAME'      => '"' . $request->app_name . '"',
            'APP_KEY'       => $key,
            'APP_URL'       => $request->app_url,
            'DB_CONNECTION' => $request->database_connection,
            'DB_HOST'       => $request->database_hostname,
            'DB_PORT'       => $request->database_port,
            'DB_DATABASE'   => $request->database_name,
            'DB_USERNAME'   => $request->database_username,
            'DB_PASSWORD'   => $request->database_password,
        ];

        foreach ($replacements as $key => $value) {
            $content = preg_replace('/^' . $key . '=/m', $key . '=' . $value, $content);
        }

        try {
            file_put_contents($this->envPath, $content);
        } catch (Exception $e) {
            $results = trans('core.installer::installer.environment.errors');
        }

        return $results;
    }
}

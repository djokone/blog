<?php namespace App\View\Helper;

use Cake\View\Helper;

class AssetHelper extends Helper
{
    private $json = null;

    public function path($file)
    {
        $parts = explode('.', $file);
        if ($this->isLocal()) {
            if ($parts[1] === 'css') {
                return null;
            }
            return 'http://localhost:3003/assets/' . $file;
        }
        if (!$this->json) {
            $this->json = json_decode(file_get_contents(WWW_ROOT . '/dist/assets.json'));
        }
        return $this->json->{$parts[0]}->{$parts[1]};
    }

    private function isLocal()
    {
        // return false;
        return strpos($_SERVER['HTTP_HOST'], 'localhost') !== false;
    }

}

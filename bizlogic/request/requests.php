 <?php
    class Request{
        private $connection;
        private $table='User';
        public $username;
        public $password;

        public function __construct($connection ){
            $this->connection=$connection;
        }
        public function getSingle(){
            $query="SELECT * FROM $this->table WHERE username=$this->username && password=$this->password";
            $result=mysqli_query($this->connection,$query);
            return $result;
        }
       
    }
 ?>
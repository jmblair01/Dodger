#pragma strict

var speed: float = 10f;
var rb: Rigidbody2D;

function Start () {
 rb = GetComponent.<Rigidbody2D>();
	 
}

function Update () {

 		if (Input.GetKey(KeyCode.LeftArrow))
         {
         	
             //transform.position += Vector3.left * speed * Time.deltaTime;
            rb.AddForce(Vector2.right * speed);
         }
         if (Input.GetKey(KeyCode.RightArrow))
         {
        	rb.AddForce(Vector2.right * speed);
             //transform.position += Vector3.right * speed * Time.deltaTime;
         }
         if (Input.GetKey(KeyCode.UpArrow))
         {
             	rb.AddForce(Vector2.up * speed);
         }
         if (Input.GetKey(KeyCode.DownArrow))
         {
             //transform.position += Vector3.down * speed * Time.deltaTime;
         }

}
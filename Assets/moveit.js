#pragma strict

var rb: Rigidbody2D;

function Start () {
 rb = GetComponent.<Rigidbody2D>();
	 
}

function Update () {

 		if (Input.GetKey(KeyCode.A))
         {
         	transform.Rotate (Vector3.forward * 5);
             //transform.position += Vector3.left * speed * Time.deltaTime;
            rb.velocity.x = -10;
         }
         if (Input.GetKey(KeyCode.D))
         {
        	rb.velocity.x = 10;
             //transform.position += Vector3.right * speed * Time.deltaTime;
             transform.Rotate (Vector3.forward * -5);
         }
         if (Input.GetKey(KeyCode.W))
         {
         	rb.velocity.y = 20;
         }
}
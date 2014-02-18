var speed = 10.0;
var hoverDistance = 5.0;
var rotateSpeed = 10.0;
private var rotation = Vector3.zero;
var div = 2;

function LateUpdate ()
{
	
   rotation.y += Input.GetAxis("Mouse X") * rotateSpeed/div;
   rotation.x -= Input.GetAxis("Mouse Y") * rotateSpeed/div;
   transform.eulerAngles = rotation;
   transform.Translate(Input.GetAxis("Horizontal") * Time.deltaTime * speed, 0, Input.GetAxis("Vertical") * Time.deltaTime * speed);
   
   var hit : RaycastHit;
/*     if (Physics.Raycast (transform.position + Vector3.up * 1000, -Vector3.up, hit))
       transform.position = hit.point + Vector3.up * hoverDistance; */
}
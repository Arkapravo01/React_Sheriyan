let role = "Admin";

switch (role) {
  case "Guest":
    console.log("No access");
    break;
  case "Admin":
    console.log("Access granted");
    break;
  default:
    console.log("No access");
    break;
}

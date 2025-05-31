import reactLogo from "./assets/react.svg"; // Import image

function ProfilePicture() {
    const handleClick = () => {
        console.log("Happy Coding");
    };

    return (
        <img 
            src={reactLogo} 
            alt="Profile" 
            onClick={handleClick} 
            style={{ cursor: "pointer", width: "100px" }} 
        />
    );
}

export default ProfilePicture;


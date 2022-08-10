function Header({ isDarkMode, onDarkModeClick}) {

    function handleDarkModeClick(e) {
        onDarkModeClick()
        console.log(e.target)
    }

    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={handleDarkModeClick}>
            {isDarkMode ? "Light" : "Dark"} Mode
            </button>
        </header> 
    )
}

export default Header
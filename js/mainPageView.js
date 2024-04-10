function updateViewMainPage() {
    document.getElementById("Model").innerHTML = /*HTML*/`
        <button class="userSettingButton">User settings</button>
        <h1 class="center">App Name</h1>
        <div class="center">Du er logget inn som ${model.inputs.login.username}</div>
        <div class="calender">
            <div class="calender_date"></div>
            <div class="calender_date"></div>
            <div class="calender_date"></div>
            <div class="calender_task"></div>
            <div class="calender_task"></div>
            <div class="calender_task"></div>
            <div class="calender_task"></div>
            
        </div>
        ${makeCalenderWeek()}
    `
}
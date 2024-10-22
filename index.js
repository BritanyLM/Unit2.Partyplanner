const form = document.querySelector(`form`);
const eventsContainer = document.getElementById(`events-container`);
form.addEventListener(`submit`, async (event) => {
    event.preventDefault();

    const input = document.querySelector(`input`);
    const eventName = input.value;
    console.log(eventName);
try{
    const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ft/events/${eventName}`);
    console.log("response status:", response.status);
    const partyData = await response.json();
    console.log("fetched date:", partyData);


    eventsContainer.innerHTML = '';

    if (partyData.success && partyData.data && Array.isArray(partyData.data)) {
        partyData.data.forEach(event => {
    const eventDiv = document.createElement('div');
    

    eventDiv.innerHTML =`
    <div>
    <h2>${event.name}</h2>
    <p> Date: ${new Date(event.date).toLocaleDateString()}</p>
    <p> Location: ${event.location}</p>
    </div>
`;

    eventsContainer.appendChild(eventDiv);
        });
    }
        } catch (error) {
            alert(`there was an error`);
        } finally {
            input.value= '';
        }
    });
       

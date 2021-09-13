.form-control {
background-color: #f8dfdc;
width: 650px;
/_ min-height: 250px;
height: min-content; _/
/_ border-radius: 15px; _/
/_ padding: 20px; _/
/_ box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75); _/
display: flex;
justify-content: space-evenly;
margin-bottom: 2rem;
}

.form-control input,
.form-control label {
display: block;
}

.form-control label {
color: rgb(0, 0, 0);
width: fit-content;
margin-bottom: 0;
}

.form-control input,
.form-control select {
font: inherit;
padding: 0.5rem;
border-radius: 4px;
border: transparent;
width: 20rem;
max-width: 100%;
}

.form-control input:focus {
outline: none;
border-color: #f8dfdc;
background-color: #f7f3f2;
}

.MuiFormControl-root {
margin-bottom: 2rem;
min-height: 250px;
}

.question-section {
width: 100%;
position: relative;
}

.answer-section {
width: 100%;
display: flex;
flex-direction: column;
margin: 4px;
/_ justify-content: space-between; _/
}

.question-container {
display: flex;
}

.form-question {
display: flex;
}

.form-options {
display: flex;
flex-direction: column;
}

.control-group {
display: flex;
column-gap: 1rem;
flex-wrap: wrap;
}

.control-group .form-control {
min-width: 15rem;
flex: 1;
}

.button {
color: rgb(187 53 49);
font: inherit;
background-color: transparent;
border: 1px solid;
padding: 0.5rem 1.5rem;
border-radius: 4px;
cursor: pointer;
}

.button:hover,
.button:active {
background-color: #f8dfdc;
border-color: #f8dfdc;
}

.button:disabled,
.button:disabled:hover,
.button:disabled:active {
/_ background-color: #ccc; _/
border-color: #292929;
/_ border-color: #ccc; _/
cursor: not-allowed;
}

.form-actions {
text-align: right;
}

.form-actions .button {
margin-left: 1rem;
}

.invalid {
border: 1px solid #b40e0e;
background-color: #fddddd;
}

.invalid:focus {
border-color: #ff8800;
background-color: #fbe8d2;
}

.error {
position: relative;
font-size: 1rem;
color: rgb(180 14 14);
}

.question-count {
font-style: italic;
font-size: 13px;
color: rgb(173 157 157);
display: flex;
align-items: flex-end;
justify-content: flex-end;
}

.button-section {
display: flex;
align-items: flex-start;
justify-content: flex-start;
}

.okay-button {
position: relative;
font-family: inherit;
font-weight: 700;
cursor: pointer;
transition-duration: 0.1s;
transition-property: background-color, color, border-color, opacity,
box-shadow;
transition-timing-function: ease-out;
outline: none;
border: 1px solid rgb(0 0 0 / 0%);
margin: 0px;
box-shadow: rgb(0 0 0 / 10%) 0px 3px 12px 0px;
padding: 6px 14px;
min-height: 40px;
background-color: rgb(0, 0, 0);
color: rgb(255 255 255);
border-radius: 4px;
}

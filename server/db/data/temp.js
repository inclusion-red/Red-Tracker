let form =[];

function createForm(name){
    form.push({
        formID: (form.length+1),
        formName: name,
        formData: {}
    })
    return form.length;
}

function addFields(userData){
    form.forEach((form) => {
        if (form.formId === userData.formId){
            form[formData] = userData;
        }
    });
}
Feature('Beer Containers Temperature');

Before(I => {
  I.amOnPage('/');
});

Scenario('waiting for thermometers', I => {
  I.see('Pragma Brewery');

  within('.col-md-4:nth-of-type(1)', () => {
    I.see('Beer 1');
    I.see('container 1');
    I.see('waiting thermometer');
    I.see('4°C - 6°C');
  });

  within('.col-md-4:nth-of-type(2)', () => {
    I.see('Beer 2');
    I.see('container 2');
    I.see('waiting thermometer');
    I.see('5°C - 6°C');
  });

  within('.col-md-4:nth-of-type(3)', () => {
    I.see('Beer 3');
    I.see('container 3');
    I.see('waiting thermometer');
    I.see('4°C - 7°C');
  });

  within('.col-md-4:nth-of-type(4)', () => {
    I.see('Beer 4');
    I.see('container 4');
    I.see('waiting thermometer');
    I.see('6°C - 8°C');
  });

  within('.col-md-4:nth-of-type(5)', () => {
    I.see('Beer 5');
    I.see('container 5');
    I.see('waiting thermometer');
    I.see('3°C - 5°C');
  });

  within('.col-md-4:nth-of-type(6)', () => {
    I.see('Beer 6');
    I.see('container 6');
    I.see('waiting thermometer');
    I.see('4°C - 6°C');
  });
});

Scenario('updating temperature', I => {
  I.sendPutRequest('/beer-container-temperature', { id: 3, temperature: 7 });

  I.dontSee('Beer 3 on container 3 is out of temperature range!');

  within('.col-md-4:nth-of-type(3)', () => {
    I.see('Beer 3');
    I.see('container 3');
    I.see('7°C');
    I.see('4°C - 7°C');
  });
});

Scenario('updating temperature to out of range', I => {
  I.sendPutRequest('/beer-container-temperature', { id: 3, temperature: 8 });

  I.waitForText('Beer 3 on container 3 is out of temperature range!');

  within('.col-md-4:nth-of-type(3)', () => {
    I.see('Beer 3');
    I.see('container 3');
    I.see('8°C');
    I.see('4°C - 7°C');
  });
});

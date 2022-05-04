const config = {
    user: 'sa', // sql user
    password: '123456', //sql user password
    server: 'localhost', // if it does not work try- localhost
    database: 'NTAuthentication',
    options: {
        trustedconnection: true,
        enableArithAbort: true,
        trustServerCertificate: true,
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        },
        instancename: 'SQLEXPRESS'  // SQL Server instance name
    }
}

module.exports = config;
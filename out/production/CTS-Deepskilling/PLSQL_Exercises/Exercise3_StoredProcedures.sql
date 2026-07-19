CREATE OR REPLACE PROCEDURE greetEmployee
IS
BEGIN
    DBMS_OUTPUT.PUT_LINE('Hello Employee');
END;
/

BEGIN
    greetEmployee;
END;
/
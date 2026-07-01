DECLARE
num NUMBER := 10;
BEGIN

    IF num > 0 THEN
        DBMS_OUTPUT.PUT_LINE('Positive Number');
    ELSIF num < 0 THEN
        DBMS_OUTPUT.PUT_LINE('Negative Number');
ELSE
        DBMS_OUTPUT.PUT_LINE('Zero');
END IF;

END;

/
# walmart-2024-testing-reliable-prog-unix


## reliable programming 
- retrospective from reliable programming 
- different metrics on the code which can be measured 
- whether its good code or not 
- code to be less complexity, should have the standards
- proper commenting 
- we should be writing efficient code 
- system will be able to understnad but we need to write human readable code 
- code to be reusable, should be classified 
- TIOBE Tics for coding standards - https://www.tiobe.com/coding-standards/
- FMEA - Failure Mode & Effective Analysis 




##  Topics for coverage - 09-Aug-2024 

- Introduction to Manual Testing 
- Introduction to Automation testing
- Software Test Levels
- Software Test Types (1. Functional 2. Non-Functional)
- Software Test Process / STLC
- Software Quality Standards
- Performing White Box/Black Box/Grey Box Testing
- Identify the bug



- SDET 
- Waterfall - Project
    - Developer 
        - Java 
        - .Net
        - Pascal
        - Cobol 
    - Tester 
    - QA 

- Agile - Product  
    - Sprint Based - 14 Days, 21 Days etc 
    - Tangible output which has to come with in stipulated time 
    - SDET - Software Developer Engineer & Tester 
    - VModel 
        - MDD - Model Driven Development 
        - DDD - Domain Driven Development 
        - BDD - Behaviour Driven Development 
            - Given When Then And But 
        ```
            Scenario: to add 2 numbers 
            AC 1: 
                Given the application is working fine 
                When the user enters the number to add 10 and 20 
                Then the application should return value 31 

            AC 2: 
                Given the application is working fine
                Whent he user enters the number to add 10.0 and 20.4 
                Then the application should return 30.4 
            AC 3: - failed case 
                Given the application is working fine
                Whent he user enters the values to "hi" and "bye" to add 
                Then the application should return HELLO


            Scenario: to divide 2 numbers 
            AC1: 
            AC2:
            AC3: 
        ```

            AC1 : passed case.

            Given the application is working fine 
            When user enteres the number to divide 50 and 25 
            Then the application should return 2

            AC 2 : 
            Given the application is working fine.
            When user enteres the number to divide 0 and 100
            Then the application should return 0

            AC 3
            Given the application is working fine.
            When user enteres the number to divide 25 and 0
            Then the application should return error



        - TDD - Test Driven Development - Lowest Level

- Types of Testing 
    - White Box 
    - Grey  Box 
    - Black Box 


```
    - to add 2 numbers 

    int add(int num1, int num2) {
        return num1 + num2; 
    }

    T add (T1 num1, T2 numb2) {
        return num1 + num2; 
    }
    int add(double num1, double num2) {
        return num1 + num2; 
    }

    int add(byte num1, byte num2) {
        return num1 + num2; 
    }

```


## Types of testing 

### Functional Testing 
    - Unit Testing 
    - Integration Testing 
    - System Testing 
    - UAT (User Acceptence Testing)
    - Regression Testing 
    - Smoke Testing 
    - Sanity Testing 
### Non-Functional Testing
    - Performance Testing 
        - Load Testing 
        - Stress Testing 
        - Spike Testing 
        - Scalable Testing 
        - Volume Testing 
    - Security Testing
        - Infrastructure 
        - Application 
        - Cloud 
        - Network
    - Usability Testing 
    - Compatability Testing  
    - Localization Testing 
    - Compliance Testing 
    - Recovery Testing 
### Other Types of Testing 
    - Alpha Testing 
    - Beta Testing 
    - Ad-hoc Testing 
    - Exploratory Testing 
    - End-To-End 
    - A/B Testing 
    - Databases Testing 
 
### What the heck is this 
- Error - which produces incorrect output / result - happens by human 
- Bug - its an error which be identified only upon execution 
- Fault - state of error 
- Failure - the software is not performaing as expected, at the particular time 


## 10-Aug-2024
Mocking the tests - TDD 
7 types of security testing 
Myths and facts about security Testing 
Performing Code reviews - Git



```
    - standards 

    public interface Device {
        public void on();
        public void off();
    }
    - blr 
        class AC implements Device{
            public void on() {..}
            public void off() {..}
        }
    - chn 
        class Projector implements Device {
            public void on() {..}
            public void off() {..}
        }
    - del 
        class Monitor implements Device{
            public void on() {..}
            public void off() {..}
        }
    - Hyd 
        class Remote{
            public void on(Device d){
                d.on();
            }
        }

```

 ## Resources 

- https://www.w3.org/WAI/WCAG2AAA-Conformance
- https://gdpr-info.eu/art-23-gdpr/
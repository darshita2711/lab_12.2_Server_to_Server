
# Reflection Questions

### 1. Why was it important to re-format the data?

It helps us send only the data the client needs. A clean and minimal response makes the API easier to understand and use.

### 2. Why send a generic error message?

It protects internal information and prevents exposing technical details to clients. We can log the actual error in the server terminal for debugging.

### 3. How could you get a fact in another language?

I would use a query parameter such as `?language=de` and pass the language to the external API using Axios, if the API supports it.

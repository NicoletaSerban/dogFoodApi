# Dog Food API

This API allows users to check whether a specific human food is safe or toxic for dogs to consume.

# Usage

- Pet owners who want to know if a certain human food is safe to give to their dog as a treat;
- Pet food companies that want to ensure the ingredients they use in their products are safe for dogs;
- Veterinarians and animal welfare organizations that want to provide information about safe and toxic foods for dogs;
- App and website developers who want to integrate a food safety feature for dogs into their platform.

# Endpoints

'GET /api/{foodName}'

This endpoint returns information about a specific food and whether it is safe or toxic for dogs to consume.

'GET /api/banana'

# Example Request

A GET request to the endpoint https://dog-food-api.onrender.com/api/taro will return the following response:

![App Screenshot](https://i.imgur.com/kBgNo1P.png)

# Example Response

The API returns a JSON object with the following properties:

- name (string): The name of the food that was queried.
- toxic (string): Indicates whether the food is toxic for dogs to eat.
- dafe (string): Indicates whether the food is safe for dogs to eat.
- obs (string): Additional information about the food and why it is or is not safe for dogs to eat.

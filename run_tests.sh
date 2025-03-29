#!/bin/bash

echo "Running Python Unit Tests..."
pytest --cov=app --cov-report=term-missing

echo "Running Cypress Integration Tests..."
npx cypress run

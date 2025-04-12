from fastapi import FastAPI
import subprocess
import os
import threading

app = FastAPI()


def error_handling_function(dir):
    # Open a file to write the errors
    with open('compile_time_errors.txt', 'w',buffering=1) as log_file:
        # Start the Vite server process
        process = subprocess.Popen(
            ['npx', 'vite', '--port', '3001'],
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,  # Merge stderr with stdout
            text=True,
            shell=True,
            cwd=dir
        )

        # Read and log the output line by line
        for line in process.stdout:
            # Print to console (optional)
            # print(line.strip())
            log_file.write(line + '\n')

        # Wait for the process to complete and get the exit code
        process.wait()
        log_file.write(f'\nVite process exited with code {process.returncode}\n')
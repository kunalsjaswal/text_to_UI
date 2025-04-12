import subprocess
import threading

from errors.extract_errors import refining_error_query

def analyze_and_rectify_error(error_message):
    # Function to analyze and rectify the error
    print(f"Analyzing error: {error_message}")
    # Add your error analysis and rectification logic here
    # ...
    
    # errors+=error_message
    
def start_vite_app(dir,coder):
    # Command to start the Vite React application
    cmd = 'npx vite --port 3001'
    
    # Start the subprocess
    process = subprocess.Popen(cmd, stderr=subprocess.PIPE, text=True,shell=True,cwd=dir)
    
    def monitor_errors(stream):
        errors=""
        required_error_content=True
        for line in iter(stream.readline, ''):
            # if "file:" in line.lower() or "error" in line.lower():
            #     analyze_and_rectify_error(line)
            #     print(line[:10],"afsgdhfj")
            #     count+=1
            if "at constructor" in line:
                required_error_content=False
                print("------------------------------------------------------errors------------------------------------")
                analyze_and_rectify_error(errors)
                print("------------------------------------------------------errors analyzed------------------------------------")
                error_prompt=refining_error_query(errors)
                coder.resolve_error(error_prompt)
                errors=""
            if "Pre-transform error:" in line or "Internal server error:" in line or "File:" in line:
                required_error_content=True
            if required_error_content:
                    errors+=line
            # analyze_and_rectify_error(line)

            # count+=1
            # if count==20:
            #     break
    # Create threads to monitor both stdout and stderr
    # stdout_thread = threading.Thread(target=monitor_errors, args=(process.stdout,))
    stderr_thread = threading.Thread(target=monitor_errors, args=(process.stderr,))
    
    # Start the threads
    # stdout_thread.start()
    stderr_thread.start()
    
    # Wait for the process to complete
    process.wait()
    
    # Wait for the threads to complete
    # stdout_thread.join()
    stderr_thread.join()

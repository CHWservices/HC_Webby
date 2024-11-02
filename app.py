   from flask import Flask, render_template, send_from_directory
   import os

   app = Flask(__name__)

   # Configuration
   FOLDER1 = 'Folder1'
   FOLDER2 = 'Folder2'

   @app.route('/')
   def index():
       # Get list of images in Folder1 and Folder2
       folder1_images = [f for f in os.listdir(FOLDER1) if f.endswith(('jpg', 'jpeg', 'png', 'gif'))]
       folder2_images = [f for f in os.listdir(FOLDER2) if f.endswith(('jpg', 'jpeg', 'png', 'gif'))]
       return render_template('index.html', folder1_images=folder1_images, folder2_images=folder2_images)

   @app.route('/Folder1/<filename>')
   def folder1_file(filename):
       return send_from_directory(FOLDER1, filename)

   @app.route('/Folder2/<filename>')
   def folder2_file(filename):
       return send_from_directory(FOLDER2, filename)

   if __name__ == '__main__':
       app.run(debug=True)
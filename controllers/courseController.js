import Course from '../models/courseModel.js'

//*create course
export const createCourse= async(req,res)=>{
    const newCourse= new Course(req.body)
    try {
        const saveCourse= await newCourse.save()
        // res.status(200).json(savedHotel)
        res.status(201).send({
            success: true,
            message: "The course has been added successfully",
            data:saveCourse
          });
    } catch (error) {
        res.status(500).json(error)
        
    }
}

//*gel All Courses
export const getAllCourses = async (req, res) => {
    try {
      const courses = await Course.find();
      res.status(200).json({
        success: true,
        data: courses
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  //*get CourseById
  export const getCourseById = async (req, res) => {
    const courseId = req.params.id;
  
    try {
      const course = await Course.findById(courseId);
      if (!course) {
        res.status(404).send({
            success: false,
            message: 'Course not found',
          })
      }
  
      res.status(200).json({
        success: true,
        data: course
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  //*updateCourse
  export const updateCourse = async (req, res) => {
    const courseId = req.params.id;
    const updateData = req.body;
    console.log('update',courseId)
    console.log('data',updateData)
  
    try {
      const updatedCourse = await Course.findByIdAndUpdate(courseId, updateData, { new: true });
  
      if (!updatedCourse) {
        return res.status(404).json({ success: false, message: 'Course not found' });
      }
  
      res.status(200).json({ success: true, data: updatedCourse });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };

//*deleteCourse
  export const deleteCourse = async (req, res) => {
    const courseId = req.params.id;
  
    try {
      const deletedCourse = await Course.findByIdAndDelete(courseId);
  
      if (!deletedCourse) {
        return res.status(404).json({ success: false, message: 'Course not found' });
      }
  
      res.status(200).json({ success: true, message: 'Course deleted successfully', data: deletedCourse });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
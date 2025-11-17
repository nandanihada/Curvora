





// Database seeding script to create initial admin user
// Run this script after setting up your MongoDB connection

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// MongoDB connection string
const MONGODB_URI = 'mongodb+srv://hadanandani14_db_user:tKlHs0Kdglxt6Lg1@cluster0.yy3hngs.mongodb.net/curvora';

// User schema (same as in the app)
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  }
}, {
  timestamps: true
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', UserSchema);

async function seedAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@curvora.com' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    // Create admin user
    const adminUser = new User({
      email: 'admin@curvora.com',
      password: 'admin123', // Change this to a secure password
      firstName: 'Admin',
      lastName: 'User',
      role: 'admin'
    });

    await adminUser.save();
    console.log('Admin user created successfully');
    console.log('Email: admin@curvora.com');
    console.log('Password: admin123');
    console.log('Please change the password after first login!');

    // Create a sample regular user
    const regularUser = new User({
      email: 'user@example.com',
      password: 'user123',
      firstName: 'Jane',
      lastName: 'Doe',
      role: 'user'
    });

    await regularUser.save();
    console.log('Sample user created successfully');
    console.log('Email: user@example.com');
    console.log('Password: user123');

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

// Run the seeding function
seedAdmin();

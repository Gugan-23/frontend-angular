import { Component, OnInit,HostListener  } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule  } from '@angular/common';

interface Product {
  _id: string;
  name: string;
  category: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isDarkMode: boolean = false; // Variable to track the dark mode status
  isLoading: boolean = false;
  menuActive: boolean = false; // Declare the property
 // Variable to track the loading state
 loading: boolean = true; // Set this to true/false based on your application's logic
activeCategory: string | null = null;
 categories: string[] = [];
 
 
productsByCategory: { [category: string]: Product[] } = {};
 showDropdown = false;

 constructor(private router: Router, private http: HttpClient) {}  // ✅ FIXED
 
 fetchCategories(): void {
  this.showDropdown = true;
  this.http.get<string[]>('http://localhost:5000/categories').subscribe({
    next: (data) => this.categories = data,
    error: (err) => console.error('Error fetching categories:', err)
  });
}

fetchProductsByCategory(category: string): void {
  this.activeCategory = category;
  if (this.productsByCategory[category]) return;

  this.http.get<any[]>('http://localhost:5000/products').subscribe({
    next: (products) => {
      // Store all product fields including _id
      this.productsByCategory[category] = products.filter(p => p.category === category);
    },
    error: (err) => console.error('Error fetching products:', err)
  });
}




hideDropdown(): void {
  this.showDropdown = false;
  this.activeCategory = '';
}

onProductClick(product: any): void {
  console.log('Product clicked:', product);
  window.location.href = `/viewproduct/${product._id}`;
}






  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false; // Set loading to false after initialization
    }, 2000);
    if (typeof window !== 'undefined') {
      const darkModePreference = localStorage.getItem('darkMode');
      if (darkModePreference === 'true') {
        this.isDarkMode = true;
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }

  }
  isMenuOpen = false;
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false; // Ensure menu is hidden
  }

  
  navigateToproductfetch(): void {
    this.closeMenu();
    this.showLoading();
    this.router.navigate(['/products']).finally(() => this.hideLoading());
  
    
  }
  navigateTocarrer(): void{
    
    this.closeMenu();
    this.showLoading();
    this.router.navigate(['/carrer']).finally(() => this.hideLoading());
  }
  navigateTohome(): void {
    this.closeMenu(); // Close the menu
   
    this.showLoading();
    
    this.router.navigate(['/']).finally(() => this.hideLoading());
  }

  navigateToevents(): void {
    this.closeMenu();
    this.showLoading();
     // Close the menu
   
    this.router.navigate(['/Events']).finally(() => this.hideLoading());
  }

  navigateToaboutus(): void {
    this.closeMenu(); // Close the menu
   
    this.showLoading();
    this.router.navigate(['/Aboutus']).finally(() => this.hideLoading());
  }

  navigateTocontact(): void {
    this.closeMenu();
    this.showLoading();
    this.router.navigate(['/Contact']).finally(() => this.hideLoading());
  }

  navigateTocontactus(): void {
    this.closeMenu();
    this.showLoading();
    this.router.navigate(['/Contactus']).finally(() => this.hideLoading());
  }

  navigateTowhatwedo(): void {
    this.closeMenu();
    this.showLoading();
    this.router.navigate(['/What-we-do']).finally(() => this.hideLoading());
  }

  private showLoading(): void {
    this.isLoading = true; // Set isLoading to true
    console.log('Loading started');
  }

  private hideLoading(): void {
    this.isLoading = false; // Set isLoading to false
    console.log('Loading finished');
  }
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('#mobile-menu')) {
      this.closeMenu(); // Close menu if click is outside the menu
    }
  }
}

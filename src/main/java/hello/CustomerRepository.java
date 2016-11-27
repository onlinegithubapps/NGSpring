package hello;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    List<Customer> findByLastName(String lastName);

    @Query("SELECT cc FROM Customer cc " +
            "WHERE cc.firstName in ?1")
    List<Customer> findByFirstNames(List<String> firstNames, Pageable pageable);
}
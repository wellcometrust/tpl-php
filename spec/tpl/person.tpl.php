<div class="person" itemscope="" itemtype="http://schema.org/Person">
  <div class="person__header">
    <?php print $variables['image'] ?>
    <div class="person__header__text">
      <h3 class="person__job-title"><?php print $variables['job_title'] ?></h3>
      <h3 class="person__institution"><?php print $variables['institution'] ?></h3>
      <h3 class="person__speciality"><?php print $variables['speciality'] ?></h3>
      <h2 class="person__title" itemprop="name"><?php print $variables['name'] ?></h2>
    </div>
  </div>
  <p class="person__doa"><?php
    print $variables['date_of_appointment']
  ?></p>
  <div class="person__contact"><?php
    print $variables['contact_about']
  ?></div>
  <div class="person__short-bio"><?php
    print $variables['short_biography']
  ?></div>
  <div class="person__long-bio"><?php
    print $variables['biography']
  ?></div>
  <div class="person__address" itemprop="address"><?php
    print $variables['address']
  ?></div>
</div>
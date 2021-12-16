{*
* 2007-2014 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2014 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*}
<!-- MODULE st social  -->

  
	
<!-- SOLO LO MUESTRO EN LA CATEGORÍA TABLAS SI QUIERO MOSTRAR EN OTRAS UTILIZO (OR) -->


{if $smarty.get.id_category == 329 }

<h3 class="title_block" >Calculador de volumen</h3>
		
<div id="valores_calculo_volumen"><label>Nivel:</label>
<div class="select selector1"><select id="nivel" class="form-control" name="nivel">
<option value="0">Pro</option>
<option value="1">Muy avanzado</option>
<option value="2">Avanzado</option>
<option value="3">Intermedio/Avanzado</option>
<option value="4">Intermedio</option>
<option value="5">Principiante</option>
</select></div>
<br /> <label>Peso:</label>
<div class="select selector1"><select id="peso" class="form-control" name="peso">
<option value="0">35kg o menos</option>
<option value="1">40kg</option>
<option value="2">45kg</option>
<option value="3">50kg</option>
<option value="4">55kg</option>
<option value="5">60kg</option>
<option value="6">65kg</option>
<option value="7">70kg</option>
<option value="8">75kg</option>
<option value="9">80kg</option>
<option value="10">85kg</option>
<option value="11">90kg</option>
<option value="12">95kg</option>
<option value="13">100kg</option>
<option value="14">105kg</option>
<option value="15">110kg</option>
</select></div>
<br /> <label>Edad:</label>
<div class="select selector1"><select id="edad" class="form-control" name="edad">
<option value="0">0-30</option>
<option value="08">31-50</option>
<option value="20">51-60</option>
<option value="30">61+</option>
</select></div>
<br /> <label>Forma f&iacute;sica:</label>
<div class="select selector1"><select id="forma_fisica" class="form-control" name="forma_fisica">
<option value="0">Excelente</option>
<option value="05">Bueno</option>
<option value="10">Normal</option>
<option value="20">Bajo</option>
</select></div>
<br /> <input id="calculador_volumen" class="btn btn-default button button-medium todo_ancho" type="button" value="Calcular volumen" /></div>
<div id="caja_volumen">
<p id="resultado">Tu volumen ideal es <span id="volumen_ideal" class="volumen"></span> litros</p>

</div>
<div id="tablas_recomendadas"> </div>



{/if}
               	

            			
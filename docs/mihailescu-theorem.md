# Mihăilescu 정리

# 개요

**Mihăilescu 정리(Mihăilescu's theorem, Catalan 추측)** 는 연속한 두 양의 정수가 둘 다 거듭제곱인 경우가 $8=2^3$ 과 $9=3^2$ 뿐이라는 정리다. 제곱수, 세제곱수 같은 거듭제곱을 작은 것부터 늘어놓으면 1, 4, 8, 9, 16, 25, 27, 32, 36, 49, 64, 81, 100 으로 이어지고, 이웃한 두 수의 차가 $1$ 인 곳은 $8,9$ 한 군데다.

이 정리는 지수가 미지수인 방정식 $x^a-y^b=1$ 의 해를 전부 정한다. 증명은 지수를 소수 $p,q$ 로 줄인 뒤 $x^p-1$ 을 $1$ 의 $p$ 제곱근을 붙인 수 체계에서 인수분해해, $8,9$ 밖의 해가 없음을 보인다.

# 직관

$1$ 보다 큰 거듭제곱을 $130$ 까지 늘어놓으면 4, 8, 9, 16, 25, 27, 32, 36, 49, 64, 81, 100, 121, 125, 128 이다. 이웃한 두 수의 차는 4, 1, 7, 9, 2, 5, 4, 13, 15, 17, 19, 21, 4, 3 이다. 차가 $1$ 인 곳은 $8,9$ 하나이고, $25,27$ 이 차 $2$, $125,128$ 이 차 $3$ 이다.

$N$ 이하의 거듭제곱은 대부분 제곱수이고 그 개수는 $\sqrt N$ 정도다. 그래서 $N$ 근처의 이웃한 거듭제곱은 대개 $2\sqrt N$ 정도 떨어져 있다. 큰 수에서 차가 $1$ 이 되려면 서로 다른 지수의 두 거듭제곱이 우연히 바로 옆에 와야 하고, 정리는 그런 일이 $8,9$ 밖에서 일어나지 않는다고 말한다.

# 정의

Catalan 방정식(Catalan's equation)은 다음 방정식이다. 미지수는 $x,y,a,b$ 이고 모두 $2$ 이상의 정수다.

$$
x^a-y^b=1
$$

Mihăilescu 정리는 이 방정식의 해가 $x=3$, $a=2$, $y=2$, $b=3$ 하나뿐이라는 진술이다. Catalan 이 1844 년에 추측했고 Mihăilescu 가 2002 년에 증명했다.[^1]

# 성질

## 소수 지수로 줄이기

$a$ 의 소인수 $p$ 에 대해 $x^a=(x^{a/p})^p$ 이므로, $(x,a,y,b)$ 가 해이면 지수를 소수 $p,q$ 로 바꾼 해 $(x^{a/p},p,y^{b/q},q)$ 가 있다. 따라서 $x^p-y^q=1$ 에서 $p,q$ 가 소수인 경우만 보면 된다.

- $q=2$ 인 $x^p=y^2+1$ 은 해가 없다. Lebesgue 가 1850 년에 $y^2+1=(y+i)(y-i)$ 를 [Gauss 정수](gaussian-integers.md)에서 인수분해해 증명했다.[^2]
- $p=2$ 인 $x^2-y^q=1$ 은 $q=3$ 에서 $3^2-2^3=1$ 만 해이고 $q\ge 5$ 에서는 해가 없다. $q=3$ 은 Euler 가 1738 년에, $q\ge 5$ 는 Ko Chao 가 1965 년에 증명했다.[^2]

남는 것은 $p,q$ 가 서로 다른 홀수 소수인 경우다.

## 두 인수의 분해

$p,q$ 가 홀수 소수이고 $x^p-1=y^q$ 이면 좌변은 다음과 같이 나뉜다.

$$
x^p-1=(x-1)\cdot\frac{x^p-1}{x-1}
$$

둘째 인수는 법 $x-1$ 로 $p$ 이므로 두 인수의 최대공약수는 $1$ 이거나 $p$ 다. 최대공약수가 $p$ 이면 $p\mid x-1$ 이고, [LTE 보조정리](lifting-the-exponent-lemma.md)(lifting the exponent lemma)로 둘째 인수에 들어 있는 $p$ 는 정확히 하나다. 곱이 $q$ 제곱이므로 두 경우에 각각 다음이 나온다.

- 최대공약수가 $1$ 이면 $x-1=s^q$ 이고 둘째 인수가 $t^q$ 이다.
- 최대공약수가 $p$ 이면 $x-1=p^{q-1}s^q$ 이고 둘째 인수가 $pt^q$ 이다.

## Cassels 정리

**Cassels 정리(Cassels' theorem)** 는 홀수 소수 $p,q$ 와 $x^p-y^q=1$ 의 해에 대해 $q\mid x$, $p\mid y$ 라는 정리다.[^3] $p\mid y$ 이면 $x^p\equiv 1\pmod p$ 이고 $x^p\equiv x\pmod p$ 이므로 $p\mid x-1$ 이다. 그래서 위 두 경우 가운데 둘째만 일어난다.

## Tijdeman 정리와 마지막 단계

**Tijdeman 정리(Tijdeman's theorem)** 는 Catalan 방정식의 해가 유한 개이고 그 크기에 계산 가능한 상한이 있다는 정리다. [Baker 정리](baker-theorem.md)의 로그 일차형식 하한으로 $\vert p\log x-q\log y\vert$ 를 아래에서 눌러 1976 년에 증명했다.[^4] 상한이 너무 커서 이것만으로는 해를 다 확인할 수 없었다.

Mihăilescu 는 Cassels 정리로 얻은 $x-1=p^{q-1}s^q$ 꼴에서 $x-\zeta$ 의 아이디얼을 [원분체](cyclotomic-fields.md) $\mathbb Q(\zeta)$, $\zeta=e^{2\pi i/p}$ 에서 다뤘다. 첫 단계로 다음 이중 Wieferich 조건(double Wieferich condition)을 얻었다.[^5]

$$
p^{q-1}\equiv 1\pmod{q^2},\qquad q^{p-1}\equiv 1\pmod{p^2}
$$

나머지 단계는 원분 단수(cyclotomic unit)와 [Stickelberger 정리](stickelberger.md)의 소멸자, Thaine 정리(Thaine's theorem)를 써서 해가 없음을 보인다.[^5]

# 활용

- Pillai 추측(Pillai's conjecture)은 정수 $k\ge 1$ 마다 $x^a-y^b=k$ 의 해가 유한 개라는 추측이다. Mihăilescu 정리는 $k=1$ 인 경우다. 직관 절의 $25,27$ 과 $125,128$ 이 $k=2$ 와 $k=3$ 의 해다.
- 두 인수 분해의 둘째 인수 $(x^p-1)/(x-1)$ 은 원분다항식 $\Phi_p(x)$ 다. $x^n-1$ 의 새 소인수를 찾는 [Zsigmondy 정리](zsigmondy-theorem.md)도 이 인수의 $p$ 지수가 $1$ 이라는 데서 출발한다.

[^1]: P. Mihăilescu, "Primary cyclotomic units and a proof of Catalan's conjecture", *Journal für die reine und angewandte Mathematik* **572** (2004), 167–195.
[^2]: P. Ribenboim, *Catalan's Conjecture: Are 8 and 9 the Only Consecutive Powers?*, Academic Press, 1994. Euler, Lebesgue, Ko Chao 의 경우와 그 증명.
[^3]: J. W. S. Cassels, "On the equation aˣ−bʸ=1. II", *Proceedings of the Cambridge Philosophical Society* **56** (1960), 97–103.
[^4]: R. Tijdeman, "On the equation of Catalan", *Acta Arithmetica* **29** (1976), 197–209.
[^5]: Y. Bilu, "Catalan's conjecture (after Mihăilescu)", *Séminaire Bourbaki* exposé 909, *Astérisque* **294** (2004), 1–26.

# 연관 문서

## 선수지식

- [LTE 보조정리](lifting-the-exponent-lemma.md)
- [Baker 정리](baker-theorem.md)
- [원분체](cyclotomic-fields.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #field_theory

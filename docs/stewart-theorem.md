# 삼각형의 Stewart 정리

# 개요

삼각형의 **Stewart 정리(Stewart's theorem)** 는 꼭짓점에서 마주 보는 변 위의 한 점까지 그은 선분의 길이를, 세 변의 길이와 그 점이 변을 나눈 두 길이로 적는 등식이다. 세 변이 $13$, $14$, $15$ 인 삼각형에서 길이 $14$ 인 변의 중점까지 그은 중선의 길이를 각도 없이 구하려고 한다. 두 각이 보각이라는 것과 코사인 법칙을 함께 쓰면 각이 소거되고, 중선의 제곱이 $148$ 로 나온다.

# 직관

$B=(0,0)$, $C=(14,0)$, $A=(5,12)$ 로 두면 $AB=13$, $AC=15$ 다. 변 $BC$ 위의 점 $D$ 를 $BD=m$, $DC=n$ 으로 잡고 $AD=d$ 를 구한다.

$D$ 를 $A$ 에서 내린 수선의 발 $(5,0)$ 으로 잡으면 $m=5$, $n=9$, $d=12$ 이고, 다음 두 수가 같다.

$$
15^2\cdot 5+13^2\cdot 9=2646,\qquad 14\cdot(12^2+5\cdot 9)=2646
$$

$D$ 를 중점 $(7,0)$ 으로 잡으면 $m=n=7$ 이고, 같은 등식에 넣으면 $d^2=148$ 이 나온다. 좌표로 확인하면 $(7-5)^2+12^2=148$ 이다.

# 정의

삼각형 $ABC$ 에서 $a=BC$, $b=CA$, $c=AB$ 로 쓴다. 변 $BC$ 위의 점 $D$ 에 대해 $m=BD$, $n=DC$, $d=AD$ 라 하면 Stewart 정리는 다음 등식이다.

$$
b^2m+c^2n=a\left(d^2+mn\right)
$$

$a=m+n$ 이다. 직관 절의 두 경우가 $D$ 를 수선의 발과 중점으로 잡은 예다.

# 성질

## 코사인 법칙으로 하는 증명

$\theta=\angle ADB$ 로 두면 $\angle ADC=180°-\theta$ 다. 두 삼각형 $ABD$, $ACD$ 에 코사인 법칙(law of cosines)을 쓰면 다음이 나온다.

$$
c^2=d^2+m^2-2dm\cos\theta,\qquad b^2=d^2+n^2+2dn\cos\theta
$$

첫 식에 $n$, 둘째 식에 $m$ 을 곱해 더하면 $\cos\theta$ 가 든 항이 사라지고 다음이 남는다. $m+n=a$ 이므로 Stewart 정리다.

$$
c^2n+b^2m=d^2(m+n)+mn(m+n)
$$

코사인 법칙은 [내적](inner-product-spaces.md)으로 $\vert u-v\vert^2$ 을 전개한 식 $\vert u\vert^2+\vert v\vert^2-2u\cdot v$ 와 같다.

## 중선 정리

$D$ 가 중점이면 $m=n=a/2$ 이고, 등식은 다음이 된다.

$$
b^2+c^2=2d^2+\frac{a^2}{2}
$$

이것을 Apollonius 의 중선 정리(Apollonius's theorem)라 한다. 직관 절에서 $225+169=394=2\cdot 148+98$ 이다. 평행사변형의 두 대각선의 제곱의 합이 네 변의 제곱의 합과 같다는 평행사변형 법칙과 같은 내용이다.

## 각의 이등분선의 길이

$AD$ 가 각 $A$ 의 이등분선이면 [Menelaus 정리](menelaus-theorem.md) 문서의 표대로 $m:n=c:b$ 이므로 $m=ac/(b+c)$, $n=ab/(b+c)$ 다. Stewart 정리에 넣으면 다음이 나온다.

$$
d^2=bc\left(1-\frac{a^2}{(b+c)^2}\right)
$$

# 활용

- 삼각형 안의 길이 계산. 중선, 각의 이등분선, 체바 선분의 길이를 변의 길이만으로 구한다. [Routh 정리](routh-theorem.md)처럼 비로 정해진 점들에 대한 계산에서 길이가 필요할 때 쓴다.
- 거리 기하. 한 직선 위의 세 점 $B$, $D$, $C$ 와 다른 점 $A$ 사이의 네 거리가 이 등식으로 묶이므로, 거리만 주어진 점들이 평면에 놓일 수 있는지 판정하는 조건의 하나가 된다. [Heron 공식](heron-formula.md)의 Cayley–Menger 행렬식이 같은 종류의 조건이다.

# 연관 문서

## 선수지식

- [Menelaus 정리](menelaus-theorem.md)
- [내적 공간](inner-product-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #linear_algebra #combinatorics

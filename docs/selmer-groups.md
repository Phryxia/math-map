# Selmer 군과 Tate–Shafarevich 군

# 개요

[타원곡선](elliptic-curves.md)에서 Mordell–Weil 정리를 보았다. 수체 $K$ 위의 타원곡선 $E$ 에 대해

$$
E(K)\;\cong\;\mathbb Z^r\oplus E(K)_{\mathrm{tors}}
$$

이고 비틀림 부분은 쉽게 계산된다. 문제는 계수 $r$ 이다. Mordell–Weil 의 증명은 두 조각으로 나뉘는데, 높이 함수를 쓰는 뒷부분은 완전히 구성적인 반면 앞부분인 **약 Mordell–Weil 정리**, 곧 $E(K)/mE(K)$ 가 유한하다는 진술의 증명은 유한성만 줄 뿐 그 군을 손에 쥐여 주지 않는다.

$E(K)/mE(K)$ 를 붙잡는 표준적인 방법이 **하강**이다. Kummer 열에서 나오는 단사

$$
E(K)/mE(K)\ \hookrightarrow\ H^1(K,E[m])
$$

로 목표를 Galois 코호몰로지 안에 넣는데, 오른쪽은 무한군이라 그대로는 쓸모가 없다. 그래서 모든 자리 $v$ 에서 국소적으로 점에서 오는 것만 남기고 잘라낸다. 그렇게 걸러낸 유한군이 **Selmer 군** $\mathrm{Sel}^m(E/K)$ 이고, 이것은 유효하게 계산된다.

그런데 걸러낸 결과가 목표보다 크다. 차이를 재는 군이 **Tate–Shafarevich 군** $Ш(E/K)$ 이며, 기본 완전열

$$
0\longrightarrow E(K)/mE(K)\longrightarrow\mathrm{Sel}^m(E/K)\longrightarrow Ш(E/K)[m]\longrightarrow0
$$

이 모든 것을 요약한다. $Ш$ 의 원소는 모든 자리에서 국소점을 가지면서 유리점이 없는 곡선, 곧 [Brauer 군](brauer-groups.md)에서 본 Hasse 원리의 반례다. 그러니 순위 계산이 막히는 지점과 Hasse 원리가 깨지는 지점이 같은 대상이다.

# 직관

## 하강이란 점을 나눠 보는 일이다

Fermat 의 무한하강은 해가 있으면 더 작은 해를 만들어 모순을 얻는 논법이었다. 타원곡선의 하강은 그 방향을 뒤집어 쓴다. $P\in E(K)$ 를 주고 묻는다. **$2Q=P$ 인 $Q$ 가 $K$ 위에 있는가.**

$\bar K$ 위에서는 항상 있다. $2Q=P$ 의 해는 정확히 네 개이고, 하나를 $Q_0$ 라 하면 나머지는 $T\in E[2]$ 에 대한 $Q_0+T$ 다. 즉 해집합은 $E[2]$ 가 단순추이적으로 작용하는 집합, 곧 $E[2]$ 동차공간이다.

이제 $\sigma\in G_K$ 를 이 해집합에 작용시키면 $\sigma(Q_0)$ 도 해이므로 $\sigma(Q_0)=Q_0+c_\sigma$ 인 $c_\sigma\in E[2]$ 가 유일하게 정해진다. 이 $c_\sigma$ 가 코사이클 조건을 만족하고, $Q_0$ 를 바꾸면 코경계만큼 달라진다. 그래서

$$
P\ \longmapsto\ [c]\in H^1(K,E[2])
$$

가 잘 정의되고, $[c]=0$ 인 것과 $2Q=P$ 가 $K$ 위에서 풀리는 것이 동치다. 하강은 나눗셈의 장애를 코호몰로지 류로 옮기는 작업이다.

## 무한한 상자를 국소 조건으로 자른다

$H^1(K,E[m])$ 은 무한군이다. 수체 $K$ 의 절대 Galois 군이 크기 때문이다. 하지만 $E(K)/mE(K)$ 에서 온 류에는 눈에 띄는 성질이 있다. 각 자리 $v$ 에서 제한하면 그 류는 $E(K_v)$ 의 점에서 오므로 $H^1(K_v,E)$ 에서 사라진다.

$$
\mathrm{Sel}^m(E/K)=\ker\Big(H^1(K,E[m])\longrightarrow\prod_v H^1(K_v,E)\Big)
$$

국소 조건은 유한한 검사다. 나쁜 환원 자리와 $m$ 을 나누는 자리를 빼면 조건이 자동으로 만족되므로 실제로는 유한 개의 자리만 보면 되고, 각 자리의 조건도 유한 계산이다. 그 결과 Selmer 군은 유한이며 명시적으로 나열할 수 있다.

## 남는 간극이 Hasse 원리의 반례다

이제 자연스러운 질문. 국소 조건을 모두 통과한 류는 정말로 $K$ 점에서 오는가.

그렇지 않다. 통과했지만 대역적으로 실현되지 않는 류가 있고, 그 류에 대응하는 기하적 대상이 **주동차공간**이다. $E$ 가 단순추이적으로 작용하는 매끄러운 종수 1 곡선 $C$ 인데, $C$ 에 $K$ 점이 있으면 $C\cong E$ 가 되어 류가 자명해진다. $Ш$ 의 비자명 원소란

$$
C(K_v)\ne\emptyset\ \ \text{for all }v,\qquad C(K)=\emptyset
$$

인 곡선이다. Brauer 군 문서에서 본 Selmer 의 삼차곡선 $3x^3+4y^3+5z^3=0$ 이 바로 이런 곡선이고, 아래에서 다룰 Lind–Reichardt 의 $2y^2=x^4-17$ 도 그렇다.

그러므로 Selmer 군은 "순위의 상한" 을 준다. 상한이 실제 순위와 같은지는 $Ш$ 를 알아야 하는데, $Ш$ 의 유한성조차 일반적으로는 미해결이다. 순위 계산이 어려운 이유가 여기에 있다.

## 왜 $Ш$ 는 보이지 않는가

$Ш$ 의 원소가 곡선이므로 눈으로 볼 수는 있다. 그런데 "이 곡선에 유리점이 없다" 를 증명하는 일이 일반적으로 어렵다. 국소 조건은 다 통과하므로 합동만으로는 절대 결론이 나지 않고, 더 깊은 산술(4차 잉여 상호법칙, 상위 하강, Brauer–Manin 장애)이 필요하다. $Ш$ 가 유한하다는 것을 안다면 하강을 충분히 높은 차수까지 반복해 언젠가 결론이 나겠지만, 유한성 자체가 열려 있으므로 순위 계산 알고리즘의 종료가 보장되지 않는다.

# 정의

## Weil–Châtelet 군

$E/K$ 의 주동차공간이란 $E$ 의 단순추이적 작용 $E\times C\to C$ 를 갖춘 매끄러운 사영 곡선 $C/K$ 다. $K$ 동형에 의한 동치류 전체를

$$
\mathrm{WC}(E/K)\;\cong\;H^1(K,E(\bar K))
$$

라 쓰고 Weil–Châtelet 군이라 한다. 자명한 류가 $C(K)\ne\emptyset$ 인 것과 같다. 국소체 위에서는 $H^1(K_v,E)$ 가 유한군이며 Tate 국소 쌍대성이 이를 $E(K_v)$ 와 짝지어 준다.

## Kummer 열

$m\ge2$ 에 대해 $\bar K$ 점의 완전열 $0\to E[m]\to E(\bar K)\xrightarrow{m}E(\bar K)\to0$ 에 Galois 코호몰로지를 씌우면

$$
0\longrightarrow E(K)/mE(K)\xrightarrow{\ \delta\ }H^1(K,E[m])\longrightarrow H^1(K,E)[m]\longrightarrow0
$$

이 된다. 이 열이 하강의 출발점이다. 같은 열을 각 완비화 $K_v$ 에 대해서도 쓰고, 제한사상으로 둘을 이어 붙인다.

## Selmer 군과 $Ш$

$$
\mathrm{Sel}^m(E/K)=\ker\Big(H^1(K,E[m])\to\prod_v\frac{H^1(K_v,E[m])}{\mathrm{im}\,\delta_v}\Big),\qquad
Ш(E/K)=\ker\Big(H^1(K,E)\to\prod_vH^1(K_v,E)\Big)
$$

두 정의를 Kummer 열과 함께 놓으면 개요의 기본 완전열이 나온다.

$$
0\longrightarrow E(K)/mE(K)\longrightarrow\mathrm{Sel}^m(E/K)\longrightarrow Ш(E/K)[m]\longrightarrow0
$$

왼쪽은 알고 싶은 것, 가운데는 계산되는 것, 오른쪽은 장애다.

## 순위의 상한

$E(K)_{\mathrm{tors}}$ 를 알고 $\mathrm{Sel}^m$ 을 계산하면

$$
r\;\le\;\log_m\#\mathrm{Sel}^m(E/K)-\log_m\#E(K)[m]
$$

를 얻는다. 등호는 $Ш[m]=0$ 일 때다. 반대 방향의 하한은 실제 점을 찾아서 얻으며, 상한과 하한이 만나면 순위가 확정된다.

# 성질

## 유한성과 그 한계

$\mathrm{Sel}^m(E/K)$ 는 항상 유한하다. 증명은 Selmer 군의 원소가 $S$ 를 나쁜 환원 자리와 $m$ 과 무한 자리의 합집합이라 할 때 $S$ 밖에서 비분기라는 사실과, 유계 분기를 갖는 유한 확대가 유한 개뿐이라는 Hermite–Minkowski 정리를 쓴다. 약 Mordell–Weil 정리가 여기서 따라 나온다.

반면 $Ш(E/K)$ 의 유한성은 추측이다. 알려진 것은 부분적이다.

| 결과 | 조건 |
|---|---|
| Rubin (1987) | CM 타원곡선, 해석적 순위 $0$ |
| Kolyvagin (1988) | 모듈러 곡선, 해석적 순위 $\le1$ |
| Kato, Skinner–Urban | Iwasawa 주추측 경유, 순위 $0$ 의 여러 경우 |

$Ш$ 는 나눌 수 있는 부분군을 가질 수 없다는 것이 유한성과 동치이며, 이것이 BSD 추측의 일부다.

## Cassels–Tate 쌍

$Ш$ 에는 교대 쌍

$$
\langle\ ,\ \rangle\colon Ш(E/K)\times Ш(E/K)\longrightarrow\mathbb Q/\mathbb Z
$$

가 있고, 나눌 수 있는 부분을 나눈 몫 위에서 비퇴화다. 정의는 각 자리의 국소 불변량을 더하는 것으로, [Brauer 군](brauer-groups.md)의 완전열 $\sum_v\mathrm{inv}_v=0$ 과 같은 구조다. 따라서 $Ш$ 가 유한하면 위수가 완전제곱수다. 실제로 관측되는 $Ш$ 의 위수가 $1,4,9,16,25,\dots$ 인 이유가 이것이다.

## 2 하강의 구체적 모습

$E:y^2=x(x-e_1)(x-e_2)$ 처럼 $E[2]\subset E(K)$ 이면 $E[2]\cong(\mathbb Z/2)^2$ 가 자명 가군이므로

$$
H^1(K,E[2])\cong\big(K^\times/(K^\times)^2\big)^2
$$

가 되어 코호몰로지가 아주 구체적이다. Selmer 군의 원소는 $S$ 밖에서 비분기라는 조건에서 $K(S,2)=\{d\in K^\times/(K^\times)^2:\ v(d)\equiv0\ (2)\ \forall v\notin S\}$ 안에 놓이고, 각 후보 $d$ 에 동차공간

$$
N_d\colon\quad dw^2=d^2u^4+adu^2v^2+bv^4
$$

가 대응한다. $N_d$ 가 모든 $K_v$ 에서 점을 가지면 $d$ 는 Selmer 군에 들어가고, $K$ 점까지 가지면 $E(K)/2E(K)$ 에서 온다. 국소 조건은 유한 검사이고, 대역 점 탐색은 원리적으로 끝나지 않는다. 이 간극이 정확히 $Ш[2]$ 다.

## $Ш$ 의 원소: Lind–Reichardt 곡선

$$
C\colon\quad 2y^2=x^4-17
$$

이 곡선은 종수 1 이고 그 Jacobian $E$ 에 대한 주동차공간이다. $C$ 는 모든 $\mathbb Q_p$ 와 $\mathbb R$ 에서 점을 갖지만 $\mathbb Q$ 점이 없다. 따라서 $[C]$ 는 $Ш(E/\mathbb Q)[2]$ 의 비자명 원소이며, 유리수 위에서 Hasse 원리가 깨지는 고전적인 예다[^1]. 국소 가해성은 아래에서 계산으로 확인한다.

# 활용

## 국소 가해성 확인

$C$ 를 원시 정수해로 동차화하면 $2Y^2=X^4-17Z^4$ 이고 $\gcd(X,Z)=1$ 이다. 홀수 소수에서는 $\bmod\,p$ 의 비특이 해 하나면 Hensel 보조정리가 $\mathbb Z_p$ 해로 올려 준다.

```python
def hensel_point_mod_p(p):
    """2Y^2 = X^4 - 17Z^4 의 mod p 비특이 해. 있으면 Z_p 해로 올라간다."""
    for Z in range(1, p):
        for X in range(p):
            rhs = (X**4 - 17 * Z**4) % p
            for Y in range(p):
                if (2*Y*Y - rhs) % p:
                    continue
                grad = (4*Y % p, (-4*pow(X, 3)) % p, (68*pow(Z, 3)) % p)
                if grad != (0, 0, 0):      # 편미분이 모두 0 이면 Hensel 이 안 먹는다
                    return (X, Y, Z)
    return None

for p in [3, 5, 7, 11, 13, 17, 19, 23, 10007]:
    print(p, hensel_point_mod_p(p))
```

```
3 (1, 1, 1)      5 (0, 2, 1)      7 (0, 3, 1)     11 (1, 5, 1)
13 (4, 3, 1)    17 (1, 3, 1)     19 (0, 1, 1)     23 (0, 7, 1)
10007 (0, 1705, 1)
```

$p=2$ 만 따로 본다. $X=11,\ Z=1$ 을 넣으면

$$
11^4-17=14624=2\cdot16\cdot457,\qquad Y^2=16\cdot457
$$

이고 $457\equiv1\pmod8$ 이므로 $457$ 은 $\mathbb Z_2^\times$ 에서 제곱이다. 실제로 $\bmod\ 2^k$ 제곱근이 $3,3,3,29,35,93,\dots$ 로 끝없이 올라간다. $\mathbb R$ 점은 $x>17^{1/4}\approx2.03$ 에서 넘친다. 그러므로 $C$ 는 어디서나 국소적으로 풀린다.

대역 점이 없다는 것은 합동만으로는 결코 나오지 않는다. 국소 조건을 전부 통과하기 때문이다. 실제 증명은 $\mathbb Q(\sqrt{17})$ 로 올라가 4차 잉여 상호법칙을 쓰며, 이것이 $Ш$ 를 보는 일이 왜 어려운지를 잘 보여 준다.

## 합동수 문제

$n$ 이 합동수라 함은 변이 유리수이고 넓이가 $n$ 인 직각삼각형이 있다는 뜻이고, 이는

$$
E_n\colon\ y^2=x^3-n^2x
$$

의 순위가 양수인 것과 동치다. $E_n$ 은 $E_n[2]\subset E_n(\mathbb Q)$ 이므로 완전 2 하강을 바로 적용할 수 있고, 실제로 Fermat 이 $n=1$ 이 합동수가 아님을 보인 무한하강이 이 하강의 원형이다.

Tunnell 은 $E_n$ 의 $L$ 함수 중심값을 무게 $3/2$ 인 형식의 Fourier 계수로 표현해, 유한한 정수 조건으로 합동수를 판정하는 기준을 얻었다. 다만 "조건을 만족하면 합동수" 방향은 BSD 추측의 순위 0 부분에 의존한다. $Ш$ 의 유한성이 필요한 자리다.

## BSD 추측에서의 위치

$$
\lim_{s\to1}\frac{L(E,s)}{(s-1)^r}=\frac{\Omega_E\cdot\mathrm{Reg}_E\cdot\#Ш(E/\mathbb Q)\cdot\prod_pc_p}{\#E(\mathbb Q)_{\mathrm{tors}}^2}
$$

정밀 BSD 공식의 분자에 $\#Ш$ 가 직접 등장한다. 공식이 말이 되려면 $Ш$ 가 유한해야 하므로, 유한성은 추측의 전제이자 일부다. 거꾸로 순위 0 인 곡선에서 $L(E,1)\ne0$ 을 계산하고 공식을 믿으면 $\#Ш$ 의 예측값이 나오고, 그 값을 하강으로 실제 확인하는 것이 수치 실험의 표준 절차다.

## Euler 계와 Kolyvagin

Kolyvagin 의 방법은 $Ш$ 를 위에서 누르는 유일하게 알려진 일반적 도구다. 모듈러 곡선 위의 Heegner 점들이 허수이차체의 환체 탑을 따라 정합적인 족을 이루는데, 이 족이 **Euler 계**를 이루어 Selmer 군의 원소를 하나씩 소거한다. 결론은 해석적 순위가 $\le1$ 이면 대수적 순위가 그와 같고 $Ш$ 가 유한하다는 것이다.

같은 구조가 다른 자리에서도 반복된다. Kato 의 Euler 계는 모듈러 단위에서 오고, Iwasawa 주추측을 통해 $p$ 진 $L$ 함수와 Selmer 군의 특성 아이디얼을 잇는다. Selmer 군이 $p$ 진 해석적 대상과 대수적 대상을 잇는 다리 역할을 한다는 점이 이 분야의 구도다.

[^1]: D. Lind (1940) 과 H. Reichardt (1942) 가 독립적으로 든 예다. Cassels 의 *Lectures on Elliptic Curves* 와 Silverman 의 *The Arithmetic of Elliptic Curves* X 장에 하강과 $Ш$ 의 표준적 서술이 있다. 본문의 국소 가해성 계산은 직접 한 것이다.

# 연관 문서

## 선수지식

- [타원곡선과 군 구성](elliptic-curves.md)
- [Brauer 군과 Hasse 원리](brauer-groups.md)

## 더 알아보기

- [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)
- [Poitou–Tate 완전열과 대역 상호법칙](poitou-tate.md)

#number_theory #group_theory #theorem

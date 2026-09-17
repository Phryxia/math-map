# 괴물 달빛 추측

# 개요

[유한 단순군 분류](finite-simple-groups.md)의 끝에 26 개의 **산재군**(sporadic group)이 남는다. 어떤 무한 계열에도 속하지 않는 예외들이고, 그 중 가장 큰 것이 **괴물군**(Monster) $\mathbb M$ 이다. 위수가

$$
\vert\mathbb M\vert=2^{46}3^{20}5^97^611^213^3\cdot17\cdot19\cdot23\cdot29\cdot31\cdot41\cdot47\cdot59\cdot71\approx8\times10^{53}
$$

이고, 켤레류가 194 개이므로 [기약표현](group-representations.md)도 194 개다. 자명표현 다음으로 작은 기약표현의 차원이 $196883$ 이다.

반대편에 [모듈러 형식](modular-forms.md) 쪽의 $j$ 불변량이 있다. $\mathrm{SL}\_2(\mathbb Z)$ 의 상반평면 몫이 구면이고, 그 구면의 좌표 하나를 주는 함수가 $j$ 다. $q$ 전개는

$$
j(\tau)=q^{-1}+744+196884\thinspace q+21493760\thinspace q^2+864299970\thinspace q^3+\cdots
$$

이다. 1978 년에 McKay 가 $196884=196883+1$ 을 알아챘다. 유한군 지표표의 수와 모듈러 함수의 Fourier 계수는 서로 무관한 두 세계의 자료인데, 첫 계수가 두 기약표현 차원의 합이 되었다. Thompson 이 다음 계수를 확인했다.

$$
21493760=1+196883+21296876
$$

**괴물 달빛**(monstrous moonshine)은 이 대응이 $\mathbb M$ 의 원소 전체로 확장된다는 Conway–Norton (1979) 의 추측이고, Borcherds 가 1992 년에 증명했다. 두 세계를 잇는 대상은 Leech 격자에서 만든 [정점작용소대수](vertex-operator-algebras.md) $V^\natural$ 다. 이 무한차원 등급 벡터공간은 $\mathbb M$ 의 표현이면서 등급 차원의 생성함수가 $j-744$ 다. 증명의 도구는 $V^\natural$ 에서 만든 무한차원 Lie 대수이고, 그 분모 공식이 $j$ 의 계수들을 서로 묶는다.

moonshine 은 Conway 가 고른 단어다. 밀주라는 뜻과 달빛이라는 뜻이 겹쳐 있고, 실체가 의심스러운 관찰이라는 당시의 평가를 담았다.

# 직관

수열 $\lbrace c(n)\rbrace$ 의 각 항이 군 $G$ 의 기약표현 차원들의 음이 아닌 정수 조합으로 쓰인다는 것은 **등급 표현** $V=\bigoplus_{n\ge-1}V_n$ 이 $\dim V_n=c(n)$ 으로 존재한다는 말과 같다. 차원만 맞추는 표현은 언제나 만들 수 있으므로 이 진술 자체에는 내용이 없다. 내용은 항등원이 아닌 원소에서 생긴다. 표현 $V$ 가 실재하면 모든 $g\in\mathbb M$ 에 대해 지표

$$
T_g(\tau)=\sum_{n\ge-1}\mathrm{tr}(g\mid V_n)\thinspace q^{n}
$$

를 취할 수 있고, $g=e$ 에서 $T_e=j-744$ 다. $g\ne e$ 이면 지표값은 차원보다 훨씬 작은 수들이다.

> 모든 $g\in\mathbb M$ 에 대해 $T_g$ 는 어떤 이산부분군 $\Gamma_g<\mathrm{SL}\_2(\mathbb R)$ 의 **hauptmodul** 이다.

hauptmodul 은 $\Gamma_g$ 에 의한 상반평면의 몫이 구면(genus 0)일 때 그 구면의 좌표를 주는 유일한 함수다. genus 0 인 모듈러 곡선이 드물므로 194 개의 켤레류 각각에서 이런 군이 존재한다는 조건은 강하다. 계수 다섯 개가 작은 음이 아닌 정수 계수로 분해되고 194 개 켤레류 전부에서 genus 0 이 나오는 것을 $V^\natural$ 하나가 설명한다. $\mathbb M$ 은 $V^\natural$ 의 자기동형군으로 나타나고, 모듈러성은 $V^\natural$ 이 등각장론의 공리를 만족하는 데서 나온다.

```mermaid
graph TD
  L["Leech 격자 Λ"] --> VL["격자 VOA V_Λ"]
  VL -->|"Z/2 궤도체"| VN["moonshine 가군 V♮"]
  VN -->|"자기동형군"| M["괴물군 M"]
  VN -->|"등급 차원"| J["j - 744"]
  VN --> ML["괴물 Lie 대수 m"]
```

# 정의

## McKay–Thompson 급수

$\mathbb M$ 등급 가군 $V=\bigoplus_{n\ge-1}V_n$ 이 주어졌을 때 각 $g\in\mathbb M$ 에 대해

$$
T_g(\tau)=\sum_{n\ge-1}\mathrm{tr}\negthinspace\left(g\mid V_n\right)q^n,\qquad q=e^{2\pi i\tau}
$$

를 $g$ 의 **McKay–Thompson 급수**라 한다. 지표는 켤레류의 함수이므로 $T_g$ 는 켤레류에만 의존하고, 194 개의 켤레류에서 서로 다른 급수는 171 개다.

## moonshine 가군

**정점작용소대수**(VOA)는 등각장론의 대칭을 공리화한 대수 구조다. 등급 벡터공간 $V=\bigoplus_n V_n$ 과 각 상태 $a\in V$ 에 형식적 급수

$$
Y(a,z)=\sum_{n\in\mathbb Z}a_{(n)}z^{-n-1},\qquad a_{(n)}\in\mathrm{End}(V)
$$

를 대응시키는 사상, 진공 $\mathbf 1$ 과 Virasoro 원소 $\omega$ 가 주어지고 국소성 공리를 만족한다. $\omega$ 의 모드가 중심전하 $c$ 의 Virasoro 대수를 이루며 $L_0$ 의 고유값이 등급을 준다.

**moonshine 가군** $V^\natural$ 은 Frenkel–Lepowsky–Meurman 이 구성한 중심전하 $24$ 의 VOA 로 다음을 만족한다.

$$
\mathrm{Aut}(V^\natural)\cong\mathbb M,\qquad \sum_{n\ge-1}(\dim V^\natural_n)\thinspace q^n=j(\tau)-744
$$

구성은 두 단계다. Leech 격자 $\Lambda$ 에서 격자 VOA $V_\Lambda$ 를 만들고, $\Lambda$ 의 $-1$ 자기동형이 유도하는 $\mathbb Z/2$ 작용의 **궤도체**(orbifold)를 취한다. 고정부분공간 $V_\Lambda^+$ 에 뒤틀린 부분 $V_\Lambda^{T,+}$ 를 더한 것이 $V^\natural$ 이다.

$$
V^\natural=V_\Lambda^+\oplus V_\Lambda^{T,+}
$$

격자 VOA 는 무게 1 자리에 Lie 대수를 갖는데 궤도체가 그것을 지워 $\dim V^\natural_1=0$ 이 되고, 그래서 상수항이 빠진 $j-744$ 가 나온다. 무게 2 자리 $V^\natural_2$ 는 차원 $196884$ 이고, 진공을 뺀 $196883$ 차원 부분이 **Griess 대수**다.

## 괴물 Lie 대수

$V^\natural$ 에 쌍곡격자 $\mathrm{II}\_{1,1}$ 의 VOA 를 텐서하고 끈 이론의 no-ghost 정리를 적용하면 **일반화된 Kac–Moody 대수**(Borcherds 대수) $\mathfrak m$ 을 얻는다. $\mathbb Z^2$ 로 등급이 매겨지고 근공간의 차원이

$$
\dim\mathfrak m_{(m,n)}=c(mn),\qquad c(n)=\dim V^\natural_n
$$

이다. 여기서 $(m,n)\ne(0,0)$ 이고 $c(-1)=1$, $c(0)=0$, $c(1)=196884$ 다. 보통의 Kac–Moody 대수와 달리 허근(imaginary simple root)을 허용하는 것이 일반화의 내용이다.

# 성질

## 분모 공식

Borcherds 대수에는 Weyl–Kac 분모 공식의 일반화가 있다. $\mathfrak m$ 에 적용하면 다음 항등식을 얻는다.

$$
j(\sigma)-j(\tau)=p^{-1}\prod_{m>0,\thickspace n\in\mathbb Z}\left(1-p^mq^n\right)^{c(mn)},\qquad p=e^{2\pi i\sigma},\thinspace q=e^{2\pi i\tau}
$$

왼쪽은 두 모듈러 함수의 차이고 오른쪽은 무한곱이다. 양변의 $p^mq^n$ 계수를 비교하면 $c(n)$ 들 사이의 재귀식이 나온다. 가장 단순한 것이

$$
c(4)=c(3)+\frac{c(1)^2-c(1)}{2}=864299970+\frac{196884^2-196884}{2}=20245856256
$$

이다. 이런 관계가 충분히 많아 $c(1),c(2),c(3),c(5)$ 네 개가 나머지 계수를 전부 결정한다.

## 재현 공식

$g\in\mathbb M$ 에 대해 $\mathfrak m$ 의 $g$ 뒤틀린 분모 공식을 쓰면 $T_g$ 의 계수에 대한 같은 형태의 관계식이 나온다. 이것이 **재현 공식**(replication formula)이고, 결론은 다음과 같다.

> $T_g$ 는 재현 가능(replicable)하다. 곧 처음 몇 개의 계수가 함수 전체를 결정한다.

Conway 와 Norton 이 추측한 hauptmodul 들도 재현 가능하고 재현 공식을 만족한다는 것이 따로 확인되어 있었다. 그러므로 증명이 유한한 대조로 줄어든다. 각 켤레류에서 $T_g$ 의 처음 몇 계수를 $\mathbb M$ 의 지표표에서 계산해 Conway–Norton 목록의 hauptmodul 과 비교하면 재현 가능성이 나머지를 보증한다. Borcherds 는 이 증명으로 1998 년 Fields 메달을 받았다.

## Ogg 의 관찰

1975 년에 Ogg 는 [모듈러 곡선](modular-curves.md) $X_0(p)$ 를 Fricke 대합 $w_p$ 로 더 나눈 곡선 $X_0(p)^+$ 가 언제 genus 0 인지를 물었고, 답은 15 개의 소수였다.

$$
2,3,5,7,11,13,17,19,23,29,31,41,47,59,71
$$

같은 해 발표된 $\vert\mathbb M\vert$ 의 소인수 목록이 정확히 이 15 개였다. Ogg 는 강연에서 이 일치를 설명하는 사람에게 Jack Daniel's 한 병을 주겠다고 했다. 달빛 추측에서 이것은 따름정리다. $p$ 위수 원소 $g$ 의 $T_g$ 가 hauptmodul 이려면 $\Gamma_g$ 가 genus 0 이어야 하고, 소수 위수에서 $\Gamma_g$ 가 $\Gamma_0(p)^+$ 로 나온다.

## genus 0 성질

모듈러 함수가 나오는 것은 VOA 의 모듈러 불변성에서 따라오지만, 나오는 군이 전부 genus 0 이라는 것은 그것만으로 따라오지 않는다. Borcherds 의 증명은 재현 공식을 거쳐 두 목록이 같음을 보이는 방식이고 genus 0 을 개념적으로 유도하지 않는다. 개념적 유도는 뒤에 물리 쪽에서 나왔다. Duncan–Frenkel 은 $\mathfrak m$ 의 Rademacher 합 표현을 통해, Paquette–Persson–Volpato 는 $\mathbb M$ 궤도체 끈 이론의 물리적 스펙트럼에서 genus 0 을 유도했다.

# 활용

## 정점작용소대수 이론

$V^\natural$ 을 구성하려는 시도가 정점작용소대수의 공리를 낳았고, 그것이 2 차원 등각장론의 수학적 기초가 되었다. 지금은 모듈러 텐서범주, 양자군, 3 차원 위상적 장론과 엮인 독립된 분야다.

## 일반화된 달빛과 umbral moonshine

- **일반화된 달빛.** Norton 은 켤레류 하나가 아니라 교환하는 쌍 $(g,h)$ 에 모듈러 함수를 대응시키는 확장을 제안했고 Carnahan 이 증명했다. $V^\natural$ 의 $g$ 뒤틀린 가군 위에서 $h$ 의 지표를 보는 것이다.
- **Mathieu 달빛.** Eguchi–Ooguri–Tachikawa (2010) 가 K3 곡면의 타원 종수를 $\mathcal N=4$ 지표로 분해하면서 계수가 산재군 $M_{24}$ 의 기약표현 차원으로 분해됨을 관찰했다.
- **umbral moonshine.** Cheng–Duncan–Harvey 가 Mathieu 달빛을 23 개의 Niemeier 격자 각각에 대한 사례로 확장했다. $M_{24}$ 는 Leech 를 뺀 24 차원 짝수 유니모듈러 격자 중 하나에 딸린 경우다. Duncan–Griffin–Ono 가 존재를 증명했다.

$M_{24}$ 와 Niemeier 격자가 다시 나오므로 24 차원 격자의 분류가 이 현상들의 공통 바탕이다.

## 물리와 양자 중력

$V^\natural$ 은 중심전하 $24$ 의 등각장론이고 $\mathbb M$ 은 그 대칭군이다. Witten 은 이것을 $\mathrm{AdS}\_3$ 순수 양자 중력의 경계 이론 후보로 제안했다. 계수 $c(n)$ 이 BTZ 블랙홀의 상태 수를 센다는 해석이며, 이 제안이 genus 0 의 물리적 유도를 끌어낸 계기가 되었다.

## 산재군을 보는 관점

26 개의 산재군 가운데 괴물의 부분몫으로 얻어지는 20 개를 **행복한 가족**(happy family), 나머지 6 개를 **파리아**(pariah)라 부른다. 달빛은 행복한 가족이 $V^\natural$ 이라는 하나의 구조에서 나옴을 보였다.

# 연관 문서

## 선수지식

- [theta 급수와 Dedekind eta](theta-functions.md)
- [유한 단순군 분류](finite-simple-groups.md)
- [정점작용소대수](vertex-operator-algebras.md)

## 더 알아보기

- [Umbral moonshine 과 Mathieu 달빛](umbral-moonshine.md)

#number_theory #group_theory #complex_analysis #algebra
